import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})

export class LanguageModal {
    language: string = this.getLanguage();

    constructor(
        private modalCtrl: ModalController,
        private translate: TranslateService,
    ) {}

    dismiss() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }

    getLanguage() { 
        return localStorage.getItem('language');
    }

    changeLanguage(e) {
        localStorage.setItem('language', e.detail.value);
        this.translate.use(e.detail.value);
    }
}