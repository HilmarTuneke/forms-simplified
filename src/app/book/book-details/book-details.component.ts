import {BookService} from './../book.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../book';
import {SelectItem} from "../../shared/customized-select-box/customized-select-box.component";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  submitted: boolean;
  bookForm: FormGroup;
  genres: SelectItem[] = [
    {value: 1, text: "Roman"}, {value: 2, text: "Sachbuch"}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.book = new Book();
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      id: [''],
      author: ['', [Validators.required, Validators.maxLength(20)]],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      isbn: ['', [Validators.required, Validators.maxLength(13), Validators.pattern('[0-9]*')]],
      genre: new FormControl()
    });

    this.route.data.subscribe((data: { book: Book }) => {
      if (data.book) {
        this.book = data.book;
      }
      this.bookForm.setValue(this.book);
    });
  }

  apply(): void {
    this.submitted = true;
    if (this.bookForm.valid) {
      this.book = this.bookForm.value;
      this.bookService.save(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  cancelForm(): void {
    this.router.navigate(['/books']);
  }
}
