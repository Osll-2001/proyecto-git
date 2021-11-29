import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNavComponent } from './componente-nav.component';

describe('ComponenteNavComponent', () => {
  let component: ComponenteNavComponent;
  let fixture: ComponentFixture<ComponenteNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
