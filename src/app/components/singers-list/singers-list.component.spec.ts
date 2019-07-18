import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingersListComponent } from './singers-list.component';

describe('SingersListComponent', () => {
  let component: SingersListComponent;
  let fixture: ComponentFixture<SingersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
