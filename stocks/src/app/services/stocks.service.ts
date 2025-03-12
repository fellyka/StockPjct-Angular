//Imports dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Declares a stock array and API variables
let stocks: Array<string> = ['APPL', 'GOOG','FB','AMZN','TWTR'];
let service : string = 'https://angular2-in-action-api.herokuapp.com';

//Defines and exports the TpeScript interface for a stock object
export interface StockInterface{
   symbol:string;
   lastTradePriceOnly: number;
   change: number;
   changeInPercent: number;
}

//Annotates with Injectable to wire up dependency injection
@Injectable({
  providedIn: 'root'
})

//Defines class and exports it
export class StocksService {
  //Constructor method to inject HttpClient service into class http property
  constructor(private http: HttpClient) { 

  }

  //Method to get the stocks
  get(){
    return stocks.slice();
  }

  //Method to add new stock list
  add(stock: any){
    stocks.push(stock);
    return this.get();
  }
  //Method to remove a stock from list
  remove(stock : any){
    stocks.splice(stocks.indexOf(stock),1);
    return this.get()
  }

  //Method to call HttpClient service to load stock values from API
  load(symbols : any){
    if(symbols){
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshots?symbols=' + symbols.join())
    }
  }
}
