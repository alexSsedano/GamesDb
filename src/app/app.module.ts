import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { FootrerComponent } from './footrer/footrer.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondCompComponent,
    HeaderComponent,
    ContentComponent,
    FootrerComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
