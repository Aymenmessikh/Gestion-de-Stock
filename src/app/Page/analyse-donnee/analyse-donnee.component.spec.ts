import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseDonneeComponent } from './analyse-donnee.component';

describe('AnalyseDonneeComponent', () => {
  let component: AnalyseDonneeComponent;
  let fixture: ComponentFixture<AnalyseDonneeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyseDonneeComponent]
    });
    fixture = TestBed.createComponent(AnalyseDonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
