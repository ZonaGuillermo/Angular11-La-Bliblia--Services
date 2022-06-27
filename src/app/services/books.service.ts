import { Injectable } from '@angular/core';
import { LIBROS } from '../db/books.db';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAll(): Promise<Book[]> {
    return new Promise<Book[]>((resolve, reject) => {
      resolve(LIBROS);
      reject({ error: 'No hay libros de este autor' });
    })
  }

  getById(bookId: number): Promise<Book> {
    return new Promise<Book>((resolve, reject) => {
      const bookFound = LIBROS.find((book) => book.id === bookId);
      bookFound ? resolve(bookFound) : reject({ error: 'No hay información sobre este libro' });
    })
  }

  getByWriterId(writerId: number): Promise<Book[]> {
    return new Promise<Book[]>((resolve, reject) => {
      const booksByWriterId = LIBROS.filter((book) => book.escritor === writerId)
      booksByWriterId ? resolve(booksByWriterId) : reject({ error: 'No hay libros de este escritor' });
    })
  }
}
