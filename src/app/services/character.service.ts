import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  getNoticias(){
    return this.http.get(`https://newsapi.org/v2/everything?q=apple&from=2022-09-09&to=2022-09-09&sortBy=popularity&apiKey=1046992a55e04d999fa9428cdce9d5fe`)
  }
}
