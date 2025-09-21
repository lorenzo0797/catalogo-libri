export interface Libro {
    id: string;
    idWork: string;
    workTitle: string;
    title: string;
    description?: string;
    author: string;
    coverUrl?: string;
    isbn10?: string;
    isbn13?: string;
    pages?: number;
    publishDate?: string;
    publisher?: string;
    language?: string;
}