import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByIduserComponent } from './by-iduser.component';

describe('ByIduserComponent', () => {
  let component: ByIduserComponent;
  let fixture: ComponentFixture<ByIduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByIduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByIduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
