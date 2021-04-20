import { Component, OnInit, Output, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { SignsService } from '../../services/signs.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit, OnDestroy {

  @Input() signs: any;
  layoutWidth:number;

  classValue$: Observable<any>;
  classSubscription: Subscription;
  classValue: string;

  order$: Observable<any>;
  orderSubscription: Subscription;
  order: string;

  constructor(private signService: SignsService) { }

  ngOnInit() {
    this.classValue$ = this.signService.classValueAO$;

    this.classSubscription = this.classValue$.subscribe(res => {
      this.classValue = res;
    });

    this.order$ = this.signService.orderByAO$;

    this.orderSubscription = this.order$.subscribe(res => {
      this.order = res;

    });
  }

  ngOnDestroy() {
    this.classSubscription.unsubscribe();
    this.orderSubscription.unsubscribe();
  }


}
