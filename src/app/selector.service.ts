import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SelectorService {
  
  public games  = [];
  public gameInfo =[];

  constructor(private http: HttpClient) { }
  getPs4() {
    this.http.get('https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?format=json&api_key=ef0df76d8cf4a0ceecaac46879b4fc3a0c103436&filter=platforms:146&limit=10')
    .subscribe(data => {
      this.games = (data['results']);
    });
  }

  getPc() {
    this.http.get('https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?format=json&api_key=ef0df76d8cf4a0ceecaac46879b4fc3a0c103436&filter=platforms:75&limit=10')
    .subscribe(data => {
      this.games = (data['results']); 
    });
  }

  getXbox() {
    this.http.get('https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?format=json&api_key=ef0df76d8cf4a0ceecaac46879b4fc3a0c103436&filter=platforms:145&limit=10')
    .subscribe(data => {
      this.games = (data['results']);
    });
  }

  setGame(name){
    for(let i =0; i<= this.games.length; i++){
      if(this.games[i].name == name){
        this.gameInfo=this.games[i];
      }
    }
  }
}

