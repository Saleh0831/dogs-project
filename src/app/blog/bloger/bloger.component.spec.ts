import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogerComponent } from './bloger.component';

describe('BlogerComponent', () => {
  let component: BlogerComponent;
  let fixture: ComponentFixture<BlogerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
