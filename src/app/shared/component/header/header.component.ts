import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchId: string = '';

  constructor(private router: Router) { }

  search(id: string) {
    if (id) {
      this.router.navigate(['/user', id]);
      this.searchId = ''; 
    }
  }
}
