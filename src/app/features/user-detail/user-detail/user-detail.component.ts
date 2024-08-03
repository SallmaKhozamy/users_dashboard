import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Subscribe to route parameters to handle changes
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.fetchUserData(id);
    });
  }

  fetchUserData(id: number) {
    this.userService.getUser(id).subscribe(response => {
      this.user = response.data;  // Adjusted to access nested data
    }, error => {
      console.error('Error fetching user data:', error);
      // Handle error, e.g., navigate to an error page or display a message
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
 }
