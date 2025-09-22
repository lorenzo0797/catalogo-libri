import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { OpenLibraryAuthor, OpenLibraryEdition, OpenLibraryEditionsResponse, OpenLibraryResponse, OpenLibraryWork } from '../../common/models/api-response';
import { Libro } from '../../common/models/libri-dto';

function mapToLibro(
  work: OpenLibraryWork,
  edition: OpenLibraryEdition,
  author?: OpenLibraryAuthor
): Libro {
  const coverId = edition.covers?.[0] ?? work.covers?.[0];
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : undefined;

  return {
    id: edition.key,
    idWork: work.key,
    workTitle: work.title,
    title: edition.title,
    description:
      edition.description ?
        typeof edition.description === 'string' ? edition.description : edition.description?.value
        : typeof work.description === 'string' ? work.description : work.description?.value,
    author: author?.name ?? 'Sconosciuto',
    coverUrl,
    publishDate: edition.publish_date,
    publisher: edition.publishers?.[0],
    pages: edition.number_of_pages,
    isbn13: edition.isbn_13?.[0],
    isbn10: edition.isbn_10?.[0],
    language: edition.languages?.[0]?.key.replace('/languages/', '')
  };
}

@Injectable({
  providedIn: 'root'
})
export class LibriService {

  protected readonly httpClient = inject(HttpClient);

  private baseUrl = 'https://openlibrary.org';

  getListaLibri(filtro: any): Observable<OpenLibraryResponse> {
    let params = new HttpParams({ fromObject: filtro });
    return this.httpClient.get<OpenLibraryResponse>(`${this.baseUrl}/search.json`, { params: params });
  }

  getDettaglioLibro(keyWork: string, keyEdition?: string): Observable<Libro> {
    return this.getWork(keyWork).pipe(
      switchMap((work) => {
        //Se nella lista è indicato l'identificativo OL dell'edizione la recupero puntuale, se no prendo la prima 
        //perchè solo una sarà presente
        let obs$ = keyEdition ? this.getEdizionePuntuale(keyEdition) : this.getEdizioni(keyWork).pipe(map(res => res[0] ?? null));
        return obs$.pipe(
          map((edition) => ({ work, edition }))
        )
      }),
      switchMap(({ work, edition }) => {
        //Recupero gli autori
        return this.getAutori(work.authors[0]?.author?.key).pipe(
          map((authors) => ({ work, edition, authors }))
        )
      }),
      map(({ work, edition, authors }) => {
        return mapToLibro(work, edition, authors)
      })
    )

  }

  private getWork(key: string): Observable<OpenLibraryWork> {
    return this.httpClient.get<OpenLibraryWork>(`${this.baseUrl}${key}.json`);
  }

  private getAutori(key: string): Observable<OpenLibraryAuthor> {
    return this.httpClient.get<OpenLibraryAuthor>(`${this.baseUrl}${key}.json`);
  }

  private getEdizionePuntuale(key: string): Observable<OpenLibraryEdition> {
    return this.httpClient.get<OpenLibraryEdition>(`${this.baseUrl}/books/${key}.json`);
  }

  private getEdizioni(key: string, limit: number = 1): Observable<OpenLibraryEdition[]> {
    let params = new HttpParams({ fromObject: { limit } });
    return this.httpClient.get<OpenLibraryEditionsResponse>(`${this.baseUrl}${key}/editions.json`, { params }).pipe(
      map((res) => res?.entries)
    );
  }

}
