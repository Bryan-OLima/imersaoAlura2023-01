import { Component, DoCheck, OnInit } from '@angular/core';
import { Values } from '../../models/values';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dollarQuotation: number = 0;
  public name: string = '';
  public value!: number;
  public result: number = 0;

  constructor(
    private _service: ServicesService,
  ) {}

  ngOnInit(): void {
    this.getDollars();
  }

  getValues(event: Values){
    this.name = event.name;
    this.value = event.dollars;
  }

  calculate() {
    this.result = this.value * this.dollarQuotation;
  }

  delete(){
    location.reload();
  }

  getDollars(){
    this._service.getDollarValue()
      .subscribe({
        next: (result: any) => {
          this.dollarQuotation = result.USDBRL.ask;
        },
        error: () => {
          console.log('error');
        }
      })
  }
}
