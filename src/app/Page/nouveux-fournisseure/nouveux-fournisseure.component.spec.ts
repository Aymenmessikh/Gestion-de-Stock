import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveuxFournisseureComponent } from './nouveux-fournisseure.component';

describe('NouveuxFournisseureComponent', () => {
  let component: NouveuxFournisseureComponent;
  let fixture: ComponentFixture<NouveuxFournisseureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveuxFournisseureComponent]
    });
    fixture = TestBed.createComponent(NouveuxFournisseureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
