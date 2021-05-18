import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirClassComponent } from './anadir-class.component';

describe('AnadirClassComponent', () => {
  let component: AnadirClassComponent;
  let fixture: ComponentFixture<AnadirClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
