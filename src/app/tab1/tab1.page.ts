import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Modal2Component} from "./modal2/modal2.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController) {

  }

  async openModal2() {
    const modal2 = await this.modalCtrl.create({
        component: Modal2Component
    });
    await modal2.present();
  }

}
