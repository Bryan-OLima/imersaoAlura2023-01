import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit{
  @Input() value: string = 'Here Goes a Value';
  @Input() color: string = '';
  ngOnInit(): void {

  }
}
