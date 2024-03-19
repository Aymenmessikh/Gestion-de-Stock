import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtByCatComponent } from './art-by-cat.component';

describe('ArtByCatComponent', () => {
  let component: ArtByCatComponent;
  let fixture: ComponentFixture<ArtByCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtByCatComponent]
    });
    fixture = TestBed.createComponent(ArtByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
