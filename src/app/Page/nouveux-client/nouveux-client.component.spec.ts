import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveuxClientComponent } from './nouveux-client.component';

describe('NouveuxClientComponent', () => {
  let component: NouveuxClientComponent;
  let fixture: ComponentFixture<NouveuxClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveuxClientComponent]
    });
    fixture = TestBed.createComponent(NouveuxClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
