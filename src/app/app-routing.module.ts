import { SpacexComponent } from './spacex/spacex.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [

  {path:'list',component:TodoListComponent},
  {path:'details',component:TodoDetailsComponent},
  {path:'spacex',component:SpacexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
