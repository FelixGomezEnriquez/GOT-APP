import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestFormComponent } from './suggest-form.component';

describe('SuggestFormComponent', () => {
  let component: SuggestFormComponent;
  let fixture: ComponentFixture<SuggestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
