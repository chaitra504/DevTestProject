import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
    selector: 'view-child',
    templateUrl: './viewchild.component.html',
    styleUrls: ['./viewchild.component.css']
  })
  export class ViewChildComponent {

counter: number=0;

onClick() {
    this.counter = this.counter+1;
    }

  }