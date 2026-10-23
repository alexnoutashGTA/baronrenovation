import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cleaning',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cleaning.component.html'
})
export class CleaningComponent {
  rooms = 2;
  bathrooms = 1;
  kitchens = 1;
  floors = 1;

  readonly options = [
    { title: 'Deep Cleaning', detail: 'Detailed room-by-room cleaning, surfaces, trim, and high-touch areas.' },
    { title: 'Bathroom Sanitization', detail: 'Disinfection-focused cleaning for all bathroom fixtures and finishes.' },
    { title: 'Post Construction Cleaning', detail: 'Dust removal, debris cleanup, and final polish after renovation work.' }
  ];

  get estimate(): number {
    const roomCost = this.rooms * 85;
    const bathroomCost = this.bathrooms * 110;
    const kitchenCost = this.kitchens * 140;
    const floorCost = this.floors * 95;
    return roomCost + bathroomCost + kitchenCost + floorCost;
  }

  updateValue(field: 'rooms' | 'bathrooms' | 'kitchens' | 'floors', value: number): void {
    const parsed = Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0;
    this[field] = parsed;
  }
}
