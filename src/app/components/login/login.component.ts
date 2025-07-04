import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule , RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword = false;

togglePassword() {
  this.showPassword = !this.showPassword;
}

}
