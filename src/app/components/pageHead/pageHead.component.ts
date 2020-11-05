import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-head',
  templateUrl: './pageHead.component.html',
  styleUrls: ['./pageHead.component.scss'],
})
export class PageHeadComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
