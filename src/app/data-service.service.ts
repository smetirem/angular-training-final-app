import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private dataUrl = 'http://localhost:3000/bugs';

  constructor(private http: HttpClient) {}

    getData(): Observable<any> {
      return this.http.get(this.dataUrl);
      }

      addData(newItem: any): void {
        this.http.post<any>(this.dataUrl, {
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          reporter: newItem.reporter,
          priority: newItem.priority,
          status: newItem.status,
          created: newItem.created,
          comments: newItem.comments        
        }).subscribe();
   }


  }