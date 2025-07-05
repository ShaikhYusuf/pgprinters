import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  contactInfo = [
    {
      title: 'Phone',
      content: '+91 75062 50012'
    },
    {
      title: 'Email',
      content: 'info@popularglassprinters.com'
    },
    {
      title: 'Haridwar Office',
      content: 'Industrial Area, Haridwar<br>Uttarakhand, India'
    },
    {
      title: 'Wada Office',
      content: 'Industrial Zone, Wada<br>Maharashtra, India'
    },
    {
      title: 'LinkedIn',
      content: '<a href="#" style="color: var(--primary-red);">Connect with us</a>'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.triggerScrollAnimations();
    }, 100);
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      alert('Thank you for your inquiry! We will get back to you soon.');
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.name && this.formData.email);
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
  }

  private triggerScrollAnimations(): void {
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, index * 100);
    });
  }
}