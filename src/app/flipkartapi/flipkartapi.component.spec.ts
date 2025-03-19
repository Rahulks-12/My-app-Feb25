import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartapiComponent } from './flipkartapi.component';

describe('FlipkartapiComponent', () => {
  let component: FlipkartapiComponent;
  let fixture: ComponentFixture<FlipkartapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
