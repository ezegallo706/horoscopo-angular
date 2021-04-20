import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
import { SignsService } from '../../services/signs.service';
import { SIGNS } from '../../constants/signs';

@Component({
  selector: 'search-sign',
  templateUrl: './search-sign.component.html',
  styleUrls: ['./search-sign.component.scss']
})
export class SearchSignComponent implements OnInit {
  @ViewChild('input', { static: true }) input: ElementRef;

  inputEvent$: Observable<any>;
  evSubscription: Subscription;

  constructor(private signService: SignsService) { }

  ngOnInit() {
    this.inputEvent$ = fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(360),
        map(data => data.target.value),
        filter(data => data === '' || SIGNS.includes(data.toLowerCase())),
        tap(data => this.signService.term$.next(data))
      );

    this.evSubscription = this.inputEvent$.subscribe();
  }


}
