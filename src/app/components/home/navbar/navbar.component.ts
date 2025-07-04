import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMobile = false;
  sidebarOpen = false;

  constructor() {
    this.updateWindowWidth();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateWindowWidth();
  }

  updateWindowWidth() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
