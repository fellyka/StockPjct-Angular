import { Component } from '@angular/core'; //Import the component annotation
import { StocksService, StockInterface } from './services/stocks.service';

//Define the component and its properties
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

//Create the component controller, with a single property
export class AppComponent {
  stocks: Array<StockInterface> = [];
  
  constructor(service: StocksService){
    service.load(['AAPL'])?.subscribe(stocks => {
      this.stocks = stocks;
    })
  }
}
