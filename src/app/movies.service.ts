import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getMovies():Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movies/week?api_key=c636ed7787cc302d96bf88ccf334e0d8&page=1://api.https://api.themoviedb.org/3/trending/movies/week?api_key=c636ed7787cc302d96bf88ccf334e0d8.org/3/trending/all/day?api_key=c636ed7787cc302d96bf88ccf334e0d8://jsonplaceholder.typicode.com/posts")
  }
}
