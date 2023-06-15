import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAlbumComponent } from './parent-album.component';

describe('ParentAlbumComponent', () => {
  let component: ParentAlbumComponent;
  let fixture: ComponentFixture<ParentAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
