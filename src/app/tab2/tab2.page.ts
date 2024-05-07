import { Component } from '@angular/core';

interface IRefs {
  text: string;
  ref: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listRefs: IRefs[] = [
    {text: 'lorem', ref: 'anotherPage'},
    {text: 'ipsum', ref: 'anotherPage'},
    {text: 'dolor', ref: 'anotherPage'},
    {text: 'sit', ref: 'anotherPage'},
    {text: 'amet', ref: 'anotherPage'},

  ];

  constructor() {}

}
