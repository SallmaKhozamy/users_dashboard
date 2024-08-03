import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    UserDetailComponent
  ]
})
export class UserDetailModule { }
