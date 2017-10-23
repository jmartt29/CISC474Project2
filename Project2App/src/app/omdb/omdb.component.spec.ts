import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdbComponent } from './omdb.component';

describe('OmdbComponent', () => {
  let component: OmdbComponent;
  let fixture: ComponentFixture<OmdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
