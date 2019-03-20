import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameUpdateComponent } from './username-update.component';

describe('UsernameUpdateComponent', () => {
  let component: UsernameUpdateComponent;
  let fixture: ComponentFixture<UsernameUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
