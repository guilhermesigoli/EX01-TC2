import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallyComponent } from './wally.component';

describe('WallyComponent', () => {
  let component: WallyComponent;
  let fixture: ComponentFixture<WallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
