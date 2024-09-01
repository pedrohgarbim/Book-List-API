import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books: Book[] = [
    { id: 1, author: "Leo Tolstoy", title: "War and Peace" },
    { id: 2, author: "Leo Tolstoy", title: "Anna Karenina" },
    { id: 3, author: "Mikhail Bulgakov", title: "The Master and Margarita" },
    { id: 4, author: "Julius Caesar", title: "The Gallic Wars" }

  ]

}
