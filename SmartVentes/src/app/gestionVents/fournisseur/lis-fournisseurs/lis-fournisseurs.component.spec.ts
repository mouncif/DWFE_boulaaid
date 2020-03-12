import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisFournisseursComponent } from './lis-fournisseurs.component';

describe('LisFournisseursComponent', () => {
  let component: LisFournisseursComponent;
  let fixture: ComponentFixture<LisFournisseursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisFournisseursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
