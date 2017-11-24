import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QueryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QueryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QueryProvider Provider');
  }

  getproducts(product) {
    return new Promise((resolve, reject) => {
      var headers = new Headers();

      headers.append('Content-Type', 'application/json');
        this.http.get('https://webscraper-project.herokuapp.com/product/' + product,).subscribe(data => {
            //if(data.json().success)
                resolve([data,product]);
                
                

            //  else
                reject(false);
        });
    })
}

}
