import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  services = [
    {
      icon: '🖨',
      title: 'Screen Printing',
      description: 'High-quality screen printing for vibrant, durable designs on glass surfaces'
    },
    {
      icon: '🎨',
      title: 'Spray Coating',
      description: 'Professional spray coating services for smooth, even finishes'
    },
    {
      icon: '✨',
      title: 'Hot Foil Stamping',
      description: 'Elegant metallic finishes using precision hot foil stamping'
    },
    {
      icon: '⚡',
      title: 'Glass Etching',
      description: 'Precise etching techniques for permanent, sophisticated branding'
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