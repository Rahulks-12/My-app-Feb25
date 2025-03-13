import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirctivesComponent } from './dirctives.component';

describe('DirctivesComponent', () => {
  let component: DirctivesComponent;
  let fixture: ComponentFixture<DirctivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirctivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirctivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
