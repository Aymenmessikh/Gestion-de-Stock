import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCmndClientComponent } from './nv-cmnd-client.component';

describe('NvCmndClientComponent', () => {
  let component: NvCmndClientComponent;
  let fixture: ComponentFixture<NvCmndClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvCmndClientComponent]
    });
    fixture = TestBed.createComponent(NvCmndClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
