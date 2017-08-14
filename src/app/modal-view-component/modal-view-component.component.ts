import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-view-component',
  templateUrl: './modal-view-component.component.html',
  styleUrls: ['./modal-view-component.component.scss']
})


export class ModalViewComponentComponent {
  closeResult: string;
  @Input("result") result: object;
  @ViewChild('content') content:ElementRef;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.dir(this.content)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
