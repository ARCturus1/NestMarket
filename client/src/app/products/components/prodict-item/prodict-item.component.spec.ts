import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdictItemComponent } from './prodict-item.component';

describe('ProdictItemComponent', () => {
  let component: ProdictItemComponent;
  let fixture: ComponentFixture<ProdictItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdictItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdictItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
