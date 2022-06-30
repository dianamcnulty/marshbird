import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGameComponent } from './buy-game.component';

describe('BuyGameComponent', () => {
  let component: BuyGameComponent;
  let fixture: ComponentFixture<BuyGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
