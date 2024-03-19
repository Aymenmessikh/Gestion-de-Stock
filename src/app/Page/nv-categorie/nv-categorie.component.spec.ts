import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCategorieComponent } from './nv-categorie.component';

describe('NvCategorieComponent', () => {
  let component: NvCategorieComponent;
  let fixture: ComponentFixture<NvCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvCategorieComponent]
    });
    fixture = TestBed.createComponent(NvCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
