import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDropdown } from './services-dropdown';

describe('SharedDropdown', () => {
  let component: ServicesDropdown;
  let fixture: ComponentFixture<ServicesDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
