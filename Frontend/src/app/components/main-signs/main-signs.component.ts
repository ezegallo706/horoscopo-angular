import { Component, OnInit, Output, Input, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DisplayModeComponent } from '../display-mode/display-mode.component';
import { ListOrderComponent } from '../list-order/list-order.component';
import { SearchSignComponent } from '../search-sign/search-sign.component';
import { SignsService } from '../../services/signs.service';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'main-signs',
  templateUrl: './main-signs.component.html',
  styleUrls: ['./main-signs.component.scss']
})
export class MainSignsComponent implements OnInit {
  dataSigns$: any = [];
  term$: Observable<any>;
  dataSignsSubscription: Subscription;

  constructor(private signService: SignsService) { }

  ngOnInit() {
    this.term$ = this.signService.termAO$.pipe(
      switchMap(term => term ? this.signService.getSignByName(this.capitalizeAndAccent(term)) : this.signService.getSigns()),
    );

    this.dataSignsSubscription = this.term$.subscribe(res => {
      this.dataSigns$ = res;
    });
  }

  capitalizeAndAccent(sign) {
    let capitalized = sign.charAt(0).toUpperCase() + sign.slice(1);

    switch (capitalized) {
      case 'Geminis':
        capitalized = 'Géminis';
        break;
      case 'Cancer':
        capitalized = 'Cáncer';
        break;
      default:
        capitalized = capitalized;
        break;
    }
    return capitalized;

  }

  ngOnDestroy(): void {
    this.dataSignsSubscription.unsubscribe();
  }

}
