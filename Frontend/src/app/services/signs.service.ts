import { Injectable, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignsService {

  constructor(private http: HttpClient) { }
  key = 'qazwsx';

  public term$ = new BehaviorSubject<string>(null);
  public termAO$ = this.term$.asObservable();

  public classValue$ = new BehaviorSubject<string>('6');
  public classValueAO$ = this.classValue$.asObservable();

  public orderBy$ = new BehaviorSubject<string>('name');
  public orderByAO$ = this.orderBy$.asObservable();

  getSigns(): Observable<any> {

    const url = 'http://localhost:3001/zodiac_signs';

    return this.http.get(url, {
      headers: {
        Authorization: this.key,
      }
    });
  }

  getSignByName(queryParam): Observable<any> {
    const url = `http://localhost:3001/zodiac_signs?name=${queryParam}`;
    return this.http.get(url, {
      headers: {
        Authorization: this.key,
      }
    })
      
  }

}
