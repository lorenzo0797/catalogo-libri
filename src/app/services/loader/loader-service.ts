import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  protected count = 0;
  protected loading$ = new BehaviorSubject<boolean>(false);

  get isLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  startLoading() {
    this.count++;
    this.loading$.next(true);
  }

  endLoading() {
    this.count--;
    if (this.count === 0) {
      this.loading$.next(false);
    }
  }

}
