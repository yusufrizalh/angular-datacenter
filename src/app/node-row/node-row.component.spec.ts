import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeRowComponent } from './node-row.component';

describe('NodeRowComponent', () => {
  let component: NodeRowComponent;
  let fixture: ComponentFixture<NodeRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeRowComponent]
    });
    fixture = TestBed.createComponent(NodeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
