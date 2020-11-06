import { Component, OnInit, Input } from '@angular/core';

import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-page-head',
  templateUrl: './pageHead.component.html',
  styleUrls: ['./pageHead.component.scss'],
})
export class PageHeadComponent implements OnInit {

  @Input() title: string;
  @Input() back: boolean = false;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  handleBack() {
    this.navCtrl.back();
  }
}
