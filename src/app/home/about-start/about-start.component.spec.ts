import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStartComponent } from './about-start.component';

describe('AboutStartComponent', () => {
  let component: AboutStartComponent;
  let fixture: ComponentFixture<AboutStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
