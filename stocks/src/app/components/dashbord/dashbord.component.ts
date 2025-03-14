import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface} from '../../services/stocks.service'

@Component({
  selector: 'dashboard',
  standalone: false,
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
})
export class DashbordComponent implements OnInit //Exports the component class, but also implements the OnInit interface
 {
  //Declares a property for holding an array of stocks
  stocks: Array<StockInterface> = [];
  //Declares a property for holding an array of stock symbols
  symbols: Array<string> = [];

  //Gets the stocks symbols from the service when the component is first constructed
  constructor(private service: StocksService)
  {
    this.symbols = service.get();
  }
 //Implements the ngOnInit method and calls the service to load stock over Http
  ngOnInit(){
    this.service.load(this.symbols)?.subscribe(stocks => this.stocks = stocks);
  }
}
