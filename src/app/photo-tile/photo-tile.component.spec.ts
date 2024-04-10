import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTileComponent } from './photo-tile.component';

describe('PhotoTileComponent', () => {
  let component: PhotoTileComponent;
  let fixture: ComponentFixture<PhotoTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
