import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsaiosComponent } from './ensaios.component';

describe('EnsaiosComponent', () => {
  let component: EnsaiosComponent;
  let fixture: ComponentFixture<EnsaiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnsaiosComponent]
    });
    fixture = TestBed.createComponent(EnsaiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
