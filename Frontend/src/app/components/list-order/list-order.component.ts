import { Component, OnInit } from '@angular/core';
import { SignsService } from '../../services/signs.service';

@Component({
  selector: 'list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  constructor(private signService: SignsService) { }

  orders = [
    {name: 'Nombre', value: 'name'},
    {name: 'Fecha', value: 'date'}
  ]

  ngOnInit(): void {
  }
  
  onSelect(event){
    this.signService.orderBy$.next(event.target.value)
    
  }

}
