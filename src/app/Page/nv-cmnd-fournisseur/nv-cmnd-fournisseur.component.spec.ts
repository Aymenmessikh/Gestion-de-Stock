import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCmndFournisseurComponent } from './nv-cmnd-fournisseur.component';

describe('NvCmndFournisseurComponent', () => {
  let component: NvCmndFournisseurComponent;
  let fixture: ComponentFixture<NvCmndFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvCmndFournisseurComponent]
    });
    fixture = TestBed.createComponent(NvCmndFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
