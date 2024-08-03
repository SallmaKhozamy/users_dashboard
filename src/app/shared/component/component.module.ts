import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatInputModule } from '@angular/material/input';      
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatIconModule,
    FormsModule
  ],
  exports:[ 
    HeaderComponent,
  ]
})
export class ComponentModule { }
