import { Component, OnInit } from '@angular/core';
import { SignsService } from '../../services/signs.service';

@Component({
  selector: 'display-mode',
  templateUrl: './display-mode.component.html',
  styleUrls: ['./display-mode.component.scss']
})
export class DisplayModeComponent implements OnInit {

  constructor(private signService: SignsService) { }

  modes = [
    { name: 'Grilla', classValue: '6' },
    { name: 'Lista', classValue: '12' }
  ]

  ngOnInit() {
  }

  onSelect(event){
    this.signService.classValue$.next(event.target.value)
  }

}
