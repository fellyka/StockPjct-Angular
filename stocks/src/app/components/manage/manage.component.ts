import { Component } from '@angular/core';
import { StocksService  } from '../../services/stocks.service';//Imports dependencies

//Declares component metadata
@Component({
  selector: 'manage',
  standalone: false,
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})

/*Defines class and two properties for storing the array of symbols
  and a string for input
*/
export class ManageComponent {
  symbols: Array<string> = [];
  stock: string = '';

  constructor(private service: StocksService){
    this.symbols = service.get();
  }

  //Method to add a new stock to the list
  add(){
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  //Method to remove a stock symbol from the list
  remove(symbol: string): void {
    this.symbols = this.service.remove(symbol);
  }

}
