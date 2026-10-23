import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Service {
  number: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

interface Project {
  title: string;
  type: string;
  image: string;
  className: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  formSent = false;
  projectType = 'Interior painting';
  projectSize = '1,000 – 1,500 sq ft';
  finishLevel = 'Refresh';
  budget = 8400;

  readonly services: Service[] = [
    { number: '01', title: 'Painting', description: 'Clean lines, rich color, and a finish that makes every room feel considered.', icon: '✦', accent: 'coral' },
    { number: '02', title: 'Stucco & exterior', description: 'Weather-ready exteriors with the texture and character your home deserves.', icon: '◒', accent: 'sage' },
    { number: '03', title: 'Drywall', description: 'Seamless repairs and smooth new surfaces, prepared perfectly for what comes next.', icon: '▱', accent: 'gold' },
    { number: '04', title: 'Cleaning', description: 'A final, detailed reset that leaves your newly renovated space ready to enjoy.', icon: '⌁', accent: 'blue' }
  ];

  readonly projects: Project[] = [
    { title: 'The Juniper House', type: 'Interior renovation', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85', className: 'project-large' },
    { title: 'Pacific Heights', type: 'Exterior + stucco', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85', className: 'project-tall' },
    { title: 'The Sunroom', type: 'Custom painting', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85', className: 'project-small' },
    { title: 'Mosswood Modern', type: 'Drywall + finish', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85', className: 'project-small' }
  ];

  updateEstimate(): void {
    const typeBase: Record<string, number> = {
      'Interior painting': 5200,
      'Exterior painting': 6800,
      'Stucco repair': 4600,
      'Drywall & repair': 3900,
      'Deep cleaning': 1200
    };
    const sizeFactor: Record<string, number> = {
      'Under 1,000 sq ft': 0.72,
      '1,000 – 1,500 sq ft': 1,
      '1,500 – 2,500 sq ft': 1.42,
      'Over 2,500 sq ft': 1.9
    };
    const finishFactor: Record<string, number> = { Refresh: 1, 'Full transformation': 1.35, 'Premium detail': 1.72 };
    this.budget = Math.round((typeBase[this.projectType] * sizeFactor[this.projectSize] * finishFactor[this.finishLevel]) / 100) * 100;
  }

  submitForm(): void {
    this.formSent = true;
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
