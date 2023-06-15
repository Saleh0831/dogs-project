import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../interface/wiki';

@Injectable({
  providedIn: 'root'
})
export class WikiService {


  constructor(private http: HttpClient) { }
  /*   https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&explaintext=true&titles=%D8%B3%DA%AF */

  searchWikiEnglis(title: any): Observable<any> {
    return this.http.get<any>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        prop: 'extracts',
        exintro: 'true',
        explaintext: 'true',
        titles: title,
        origin: '*'
      }
    })
  }
  searchWikiPersion(title: string): Observable<any> {
    return this.http.get<any>('https://fa.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        prop: 'extracts',
        exintro: 'true',
        explaintext: 'true',
        titles: title,
        origin: '*'
      }
    })
  }
  searchWikiList(title: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        srsearch: title,
        format: 'json',
        origin: '*'

      }
    })
  }

}
