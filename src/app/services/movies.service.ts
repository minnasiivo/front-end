import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { map, Observable } from 'rxjs';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private httpClient: HttpClient) { }

  url: string = 'https://www.finnkino.fi/xml/News/';

  getData(): Observable<any> {
    // let params = new HttpParams().set("area", "1041").set("categoryID", "1041");
    //let newsData: any;
    return this.httpClient.get(this.url, { responseType: 'text' })
      .pipe(map(response => {
        console.log('getXMLData... ' + response);
        //let newsData = new Array();
        // let newsData = new Array();
        //var parseString = require('xml2js').parseString;
        let newsData: any[] = [];
        parseString(response, { trim: true, explicitArray: false, mergeAttrs: true }, function (err, result) {
          console.log(JSON.stringify(result.News.NewsArticle));

          newsData = result.News.NewsArticle;
        });

        //this.newsCount = newData.lenght;


        return newsData;
      }));

  }




}
