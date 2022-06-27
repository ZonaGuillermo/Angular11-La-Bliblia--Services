import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/books-list/book-detail/book-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { WriterDetailComponent } from './components/writers-list/writer-detail/writer-detail.component';
import { WritersListComponent } from './components/writers-list/writers-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/writers' },
  { path: 'writers', component: WritersListComponent },
	{
		path: 'writer/:writerId', component: WriterDetailComponent, children:
			[
				{ path: '', pathMatch: 'full', redirectTo: 'books' },
				{ path: 'books', component: BooksListComponent },
				{ path: 'book/:bookId', component: BookDetailComponent }
    	]
  },
  { path: '**', redirectTo: '/writers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
