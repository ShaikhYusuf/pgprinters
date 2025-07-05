import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'services-dropdown.html',
  styleUrls: ['services-dropdown.css'],
})
export class ServicesDropdownComponent implements OnInit {
  isVisible = false;
  
  services = [
    { id: 'screen-printing', name: 'Screen Printing' },
    { id: 'spray-coating', name: 'Spray Coating' },
    { id: 'hot-foil-stamping', name: 'Hot Foil Stamping' },
    { id: 'glass-etching', name: 'Etching on Glass Bottles' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToService(serviceId: string): void {
    this.router.navigate(['/services'], { fragment: serviceId });
    this.isVisible = false;
  }

  show(): void {
    this.isVisible = true;
  }

  hide(): void {
    this.isVisible = false;
  }
}