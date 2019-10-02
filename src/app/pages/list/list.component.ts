import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  groceryList: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.groceryList.push({ name: 'Apples' });
    this.groceryList.push({ name: 'Bananas' });
    this.groceryList.push({ name: 'Oranges' });
  }

}
