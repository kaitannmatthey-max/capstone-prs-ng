import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from '../model/line-item';

@Injectable({
    providedIn: "root"
})
export class LineItemService {
    url: string = "http://localhost:8080/RequestLines/";

    constructor(private http: HttpClient) { }

    // list(): Observable<LineItem[]> {
    //     return this.http.get(this.url) as Observable<LineItem[]>; 
    // }

    // get(id: number): Observable<LineItem> {
    //     return this.http.get(this.url + id) as Observable<LineItem>;
    // }

    save(lineItem: LineItem): Observable<LineItem> {
        return this.http.post(this.url, lineItem) as Observable<LineItem>;
    }
    
    // update(lineItem: LineItem): Observable<LineItem> {
    //     return this.http.put(this.url, lineItem) as Observable<LineItem>;
    // }
}