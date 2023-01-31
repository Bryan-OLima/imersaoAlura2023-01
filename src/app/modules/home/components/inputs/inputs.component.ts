import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Values } from '../../models/values';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})

export class InputsComponent implements DoCheck{
  @Input() public type: string = 'text';
  @Input() public placeholder: string = 'Insira seu nome aqui';

  public name: string = '';
  public value!: number;
  public doomie!: number;

  @Output() public emitValues = new EventEmitter<Values>();

  public obj!: Values;
  
  ngDoCheck(): void {
    this.send();    
  }

  send(){
    this.obj = {
      name: this.name.trim(),
      dollars: this.value
    }
    this.emitValues.emit(this.obj);
  }
}
