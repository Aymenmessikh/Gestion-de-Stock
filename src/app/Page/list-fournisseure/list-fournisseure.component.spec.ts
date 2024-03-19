import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFournisseureComponent } from './list-fournisseure.component';

describe('ListFournisseureComponent', () => {
  let component: ListFournisseureComponent;
  let fixture: ComponentFixture<ListFournisseureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFournisseureComponent]
    });
    fixture = TestBed.createComponent(ListFournisseureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
