import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendvaluetoapiComponent } from './appendvaluetoapi.component';

describe('AppendvaluetoapiComponent', () => {
  let component: AppendvaluetoapiComponent;
  let fixture: ComponentFixture<AppendvaluetoapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppendvaluetoapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendvaluetoapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
