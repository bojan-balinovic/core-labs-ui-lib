import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLabsUiLibComponent } from './core-labs-ui-lib.component';

describe('CoreLabsUiLibComponent', () => {
  let component: CoreLabsUiLibComponent;
  let fixture: ComponentFixture<CoreLabsUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreLabsUiLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreLabsUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
