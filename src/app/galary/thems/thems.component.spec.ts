import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsComponent } from './thems.component';

describe('ThemsComponent', () => {
  let component: ThemsComponent;
  let fixture: ComponentFixture<ThemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
