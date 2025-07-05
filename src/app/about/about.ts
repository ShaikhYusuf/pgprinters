import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'about.html',
  styleUrls: ['about.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  locations = [
    {
      city: 'Haridwar',
      description: 'Primary Manufacturing Facility'
    },
    {
      city: 'Wada',
      description: 'Secondary Production Unit'
    }
  ];

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    // Trigger animations after view is initialized
    setTimeout(() => {
      this.triggerScrollAnimations();
    }, 100);
  }

  private triggerScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, index * 100);
    });
  }
}