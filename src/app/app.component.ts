import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mjc_portfolio'; 

  activeTab: string = 'home';
  public dropdownOpen = false;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) { }


  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigateTo(page: string): void {
    this.activeTab = page;
    this.dropdownOpen = false;
    this.router.navigateByUrl(`/${page}`);
  }
}

