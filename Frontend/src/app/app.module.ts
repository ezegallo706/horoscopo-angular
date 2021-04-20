import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainSignsComponent } from './components/main-signs/main-signs.component';
import { SignComponent } from './components/sign/sign.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchSignComponent } from './components/search-sign/search-sign.component';
import { DisplayModeComponent } from './components/display-mode/display-mode.component';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { FilterByPipe } from './pipes/filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainSignsComponent,
    SignComponent,
    SearchSignComponent,
    DisplayModeComponent,
    ListOrderComponent,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
