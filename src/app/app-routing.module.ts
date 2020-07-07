import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookOverviewComponent } from './book/book-overview/book-overview.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookDetailsResolver } from './book/book-details/book-details.resolver';
import { HomeComponent } from './core/home/home.component';
import { BookGenresResolver } from './book/book-details/book-genres.resolver';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookOverviewComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    resolve: {
      book: BookDetailsResolver,
      bookGenres: BookGenresResolver
    }
  },
  {
    path: 'book',
    component: BookDetailsComponent,
    resolve: {
      bookGenres: BookGenresResolver
    }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
