import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  /*Declares a property that is an input value -mThis indicates that this property is to be provided to the by a parent component passing it to the summary
  */
  @Input() stock: any; 

  //Is stock negative?
  isNegative() {
    return this.stock && this.stock.change < 0;
  }
  //Is stock positive?
  isPositive() {
    return this.stock && this.stock.change > 0;
  }
}
