import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NodeDetailComponent } from '../node-detail/node-detail.component';

@Component({
  selector: 'app-node-row',
  templateUrl: './node-row.component.html',
  styleUrls: ['./node-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeRowComponent {
  @Input() node: any;

  constructor(private modalService: NgbModal) { }

  isDanger(prop: any) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  open(node: any) {
    const modal = this.modalService.open(NodeDetailComponent);
    modal.componentInstance.node = node;
  }
}
