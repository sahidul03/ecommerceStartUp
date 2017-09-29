import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.bookService.getAllBooks().then((res) => {
      this.books = res;
    }, (err) => {
      console.log(err);
    });
  }

  deleteBook(book) {
    this.bookService.deleteBook(book._id).then((result) => {
      this.books.splice(this.books.indexOf(book), 1);
    }, (err) => {
      console.log(err);
    });
  }

}


