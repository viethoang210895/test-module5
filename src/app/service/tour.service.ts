import { Injectable } from '@angular/core';
import {Tour} from "../model/tour";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:3000/tours'
@Injectable({
  providedIn: 'root'
})
export class TourService {
id:number=1
tours:Tour[]=[]
  constructor(private httpClient:HttpClient) { }

  findAll(): Observable<Tour[]> {
    return this.httpClient.get<Tour[]>(API_URL);
  }
  save(tour: Tour): Observable<any> {
    return this.httpClient.post(API_URL, tour)
  }
  deleteById(id: number): Observable<any> {
    return this.httpClient.delete(API_URL + "/" + id)
  }
  getById(id: number): Observable<Tour> {
    return this.httpClient.get<Tour>(API_URL + "/" + id);
  }
  edit(tour: Tour,id:number): Observable<any> {
    return this.httpClient.put(API_URL+"/"+tour.id, tour)
  }

}
