import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteDetailComponent } from './qoute-detail/qoute-detail.component';
import { UnderlineDirective } from './underline.directive';
import { AddColorDirective } from './add-color.directive';
import { DateCalcPipe } from './date-calc.pipe';
import { GuoteFormComponent } from './guote-form/guote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteDetailComponent,
    UnderlineDirective,
    AddColorDirective,
    DateCalcPipe,
    GuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
