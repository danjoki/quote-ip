import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css'],
})
export class QouteComponent implements OnInit {
  title = 'My Quotes';
  quotes: Quote[] = [
    new Quote(
      1,
      'Watch finding Nemo',
      'Find an online version and watch merlin find his son',
      new Date(2020, 10, 13)
    ),
    new Quote(
      2,
      'Buy Cookies',
      'I have to buy cookies for the parrot',
      new Date(2020, 10, 12)
    ),
    new Quote(
      3,
      'Get new Phone Case',
      'Diana has her birthday coming up soon',
      new Date(2020, 10, 11)
    ),
    new Quote(
      4,
      'Get Dog Food',
      'Pupper likes expensive sancks',
      new Date(2020, 10, 10)
    ),
    new Quote(5, 'Solve math homework', 'Damn Math', new Date(2020, 10, 9)),
    new Quote(
      6,
      'Plot my world domination plan',
      'Cause I am an evil overlord',
      new Date(2020, 10, 8)
    ),
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDone(isDone, index) {
    if (isDone) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
