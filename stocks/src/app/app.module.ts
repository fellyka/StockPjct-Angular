import { NgModule } from '@angular/core'; //Imports Angular dependencies needed
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StocksService } from './services/stocks.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DashbordComponent } from './components/dashbord/dashbord.component'; 

//Uses the NgModule annotation to define a module by passing an object
@NgModule({
  //Declarations are to list any components and directives in the app
  declarations: [AppComponent, SummaryComponent, DashbordComponent],

  //Imports other modules that are used in the app
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],

  //Services will be listed here
  providers: [StocksService],

  //Bootstrap declares which component to use as the first to bootstrap the application
  bootstrap: [AppComponent],
})

//Exports an empty class, which gets annotated with configuration from NgNodule
export class AppModule {}
