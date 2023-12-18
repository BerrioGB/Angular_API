import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlAPI =  'https://as-simemdatos-prb-01.azurewebsites.net/news/filtered?paginador=%7B%22first%22:0,%22pageIndex%22:0,%22pageSize%22:6%7D&termino=&categoria=dea97ad9-6ae7-40a7-996f-44cf52f63bc1'
  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlAPI);
  }
}
