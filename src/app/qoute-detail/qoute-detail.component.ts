import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.css'],
})
export class QouteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isDone = new EventEmitter<boolean>();

  quoteDone(done: boolean) {
    this.isDone.emit(done);
  }
  constructor() {}

  ngOnInit(): void {}
}
