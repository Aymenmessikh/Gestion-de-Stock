import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmndClientComponent } from './cmnd-client.component';

describe('CmndClientComponent', () => {
  let component: CmndClientComponent;
  let fixture: ComponentFixture<CmndClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmndClientComponent]
    });
    fixture = TestBed.createComponent(CmndClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
