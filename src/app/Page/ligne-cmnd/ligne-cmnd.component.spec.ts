import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCmndComponent } from './ligne-cmnd.component';

describe('LigneCmndComponent', () => {
  let component: LigneCmndComponent;
  let fixture: ComponentFixture<LigneCmndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LigneCmndComponent]
    });
    fixture = TestBed.createComponent(LigneCmndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
