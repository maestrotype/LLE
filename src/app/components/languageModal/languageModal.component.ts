import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageModal } from './modal/modal.component';

@Component({
  selector: 'app-language-modal',
  templateUrl: './languageModal.component.html',
  styleUrls: ['./languageModal.component.scss'],
})

export class LanguageModalComponent implements OnInit {

  constructor(public modalController: ModalController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      swipeToClose: true,
      component: LanguageModal,
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
