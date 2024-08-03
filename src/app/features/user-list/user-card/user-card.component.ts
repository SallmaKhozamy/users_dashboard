import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
    @Input() fname:string = 'xxx'
    @Input() lname:string = 'xxxx'
    @Input() id:number =  0
    @Input() avatar:string = 'assets/user.png'
}
