import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirEComponent } from './anadir-e.component';

describe('AnadirEComponent', () => {
  let component: AnadirEComponent;
  let fixture: ComponentFixture<AnadirEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
