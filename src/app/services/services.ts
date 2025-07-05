import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'services.html',
  styleUrls: ['services.css'],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  services = [
    {
      icon: '🖨',
      title: 'Screen Printing',
      description: 'Our screen printing process ensures vibrant, long-lasting designs on glass bottles. Perfect for logos, text, and intricate designs with exceptional color accuracy and durability.'
    },
    {
      icon: '🎨',
      title: 'Spray Coating',
      description: 'Professional spray coating services that provide uniform coverage and premium finishes. Ideal for creating matte, glossy, or textured surfaces on glass bottles.'
    },
    {
      icon: '✨',
      title: 'Hot Foil Stamping',
      description: 'Add luxury and elegance with our hot foil stamping service. Create stunning metallic effects in gold, silver, and other premium finishes for high-end branding.'
    },
    {
      icon: '⚡',
      title: 'Etching on Glass Bottles',
      description: 'Precision etching techniques create permanent, sophisticated designs. Perfect for premium branding, awards, and personalized glass bottles with lasting impact.'
    }
  ];

  galleryItems = [
    'Screen Print Sample 1',
    'Spray Coating Sample',
    'Hot Foil Stamp Design',
    'Etched Glass Bottle',
    'Custom Logo Print',
    'Premium Finish Sample'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.triggerScrollAnimations();
    }, 100);
  }

  private triggerScrollAnimations(): void {
    const animatedElements = document.querySelectorAll('.fade-in-up, .scale-in');
    
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, index * 100);
    });
  }
}