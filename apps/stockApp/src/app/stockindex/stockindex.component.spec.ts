import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockindexComponent } from './stockindex.component';

describe('StockindexComponent', () => {
  let component: StockindexComponent;
  let fixture: ComponentFixture<StockindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
