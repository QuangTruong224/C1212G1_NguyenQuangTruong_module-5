import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingBootstrapComponent } from './using-bootstrap.component';

describe('UsingBootstrapComponent', () => {
  let component: UsingBootstrapComponent;
  let fixture: ComponentFixture<UsingBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
