import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class ApiRestProvider {
  baseUrl:string = "https://jaenbus.herokuapp.com";
  constructor(public http: HttpClient) {
    console.log('Hello ApiRestProvider Provider');
    this.http = http;
  }

  public getLines(){
    return this.http.get(this.baseUrl+"/getlineas")
  }

  public getParadas(idlinea:any){
    return this.http.get(this.baseUrl+"/getparadaslinea?idlinea="+idlinea)

  }

  public getInfoParada(idparada:any){
    return this.http.get(this.baseUrl+"/getinfoparada?idparada="+idparada)

  }

}

