import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmndFournisseureComponent } from './cmnd-fournisseure.component';

describe('CmndFournisseureComponent', () => {
  let component: CmndFournisseureComponent;
  let fixture: ComponentFixture<CmndFournisseureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmndFournisseureComponent]
    });
    fixture = TestBed.createComponent(CmndFournisseureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
