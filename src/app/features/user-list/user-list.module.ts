import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatPaginatorModule
  ],
  exports: [
    UserListComponent,
    UserCardComponent
  ]
})
export class UserListModule { }
