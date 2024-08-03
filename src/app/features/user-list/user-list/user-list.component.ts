import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users: any[] = [];
  totalUsers: number = 0; // To keep track of total users for pagination
  page: number = 1;
  pageSize: number = 6;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUsers(this.page, this.pageSize);
  }

  loadUsers(page: number, pageSize: number) {
    this.userService.getUsers(page, pageSize).subscribe(response => {
      this.users = response.data; // Adjust based on API response structure
      this.totalUsers = response.total; // Adjust based on API response structure
    });
  }

  viewDetails(userId: number) {
    this.router.navigate(['/user', userId]);
  }

  onPageChange(event: PageEvent) {
    this.page = event.pageIndex + 1; // Page index is zero-based
    this.pageSize = event.pageSize;
    this.loadUsers(this.page, this.pageSize);
  }
}
