import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';

import {map, filter} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';

import {Record} from './models/record.interface';

const RECORD_API = 'http://localhost:3000/records';

@Injectable({
  providedIn: 'root'
})

export class RecordOverviewService {
  constructor(private http: HttpClient) {

  }

  getRecords(): Observable<Record[]> {
    return this.http
      .get<Record[]>(RECORD_API);
  }

  // getRecord(id: number): Observable<Record> {
  //   return this.http
  //     .get(`${RECORD_API}/${id}`)
  //     .map((response: Response) => response.json())
  // }

  // updateRecord(record: Record): Observable<Record> {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   let options = new HttpRequest({
  //     headers: headers
  //   });
  //   return this.http
  //     .put(`${RECORD_API}/${record.id}`, record, options)
  //     .map((response: HttpResponse) => response.json())
  // }

  // removeRecord(record: Record): Observable<Record> {
  //   return this.http
  //     .delete(`${RECORD_API}/${record.id}`)
  //     .map((response: HttpResponse) => response.json())
  // }
}




