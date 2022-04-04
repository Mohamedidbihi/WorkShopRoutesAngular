import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilfollowerComponent } from './profilfollower.component';

describe('ProfilfollowerComponent', () => {
  let component: ProfilfollowerComponent;
  let fixture: ComponentFixture<ProfilfollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilfollowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilfollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
