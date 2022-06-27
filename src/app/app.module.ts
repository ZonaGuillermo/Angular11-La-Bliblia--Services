import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritersListComponent } from './components/writers-list/writers-list.component';
import { WriterDetailComponent } from './components/writers-list/writer-detail/writer-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/books-list/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WritersListComponent,
    WriterDetailComponent,
    BooksListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
