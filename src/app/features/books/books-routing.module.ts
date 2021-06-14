import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

const routes: Routes = [
  {
    path: 'books', children: [
      {path: 'list', component: BookListComponent},
      {path: 'details/:id', component: BookDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
