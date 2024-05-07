import {Component, Input, OnInit} from '@angular/core';
import {IonModal, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss'],
})
export class Modal2Component  implements OnInit {

  @Input() modal!: IonModal;

  constructor() { }

  ngOnInit() {
  }

}
