import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './features/user-list/user-list/user-list.component';
import { UserDetailComponent } from './features/user-detail/user-detail/user-detail.component';


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
