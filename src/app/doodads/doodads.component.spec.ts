import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodadsComponent } from './doodads.component';

describe('DoodadsComponent', () => {
  let component: DoodadsComponent;
  let fixture: ComponentFixture<DoodadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoodadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
