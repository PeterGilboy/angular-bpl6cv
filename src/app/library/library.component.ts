import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books = new Map<string, Book>();
  editISBN;
  editTitle;
  editAuthor;

  constructor()
  {
    this.books.set("12345", new Book("12345", "Zen And The Art of Motorcycle Mechanics", "Barry Sprout")); 
    this.books.set("54321", new Book("54321", "How To Win Friends And Influence People", "Dan Half-Pint"));
  }

  ngOnInit() {
  }

  AddBook(isbn: string, title: string, author: string)
  {
    this.books.set(isbn, new Book(isbn, title, author));
  }

  RemoveBook(isbn: string)
  {
    this.books.delete(isbn);
  }
}

class Book
{
  isbn;
  title;
  author;
  constructor(isbn: string, title: string, author: string)
  {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
  }
}
