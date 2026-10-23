import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuOpen = false;

  constructor(private readonly router: Router) {}

  goToEstimate(): void {
    this.menuOpen = false;
    this.router.navigate(['/']).then(() => setTimeout(() => document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' })));
  }
}
