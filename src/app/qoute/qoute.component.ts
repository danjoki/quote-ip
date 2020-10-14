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
      'This is a test Quote',
      'You might like it',
      new Date(2020, 10, 13),
      0,
      0
    ),
  ];

  addNewQuote(quote) {
    let qouteLenght = this.quotes.length;
    quote.id = qouteLenght + 1;
    quote.dateCreated = new Date(quote.dateCreated);
    this.quotes.push(quote);
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  voteAdd(index) {
    this.quotes[index].votesUp = this.quotes[index].votesUp + 1;
  }

  voteMinus(index) {
    let vote: number = this.quotes[index].voteDown;
    this.quotes[index].voteDown = this.quotes[index].voteDown + 1;
  }

  quoteDone(isDone, index) {
    if (isDone) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
