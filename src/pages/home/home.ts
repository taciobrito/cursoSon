import { Component } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public medicos: any[];

  constructor(public navCtrl: NavController, private http: Http) {

  }

  // ngOnInit(){
  // 	this.http.get('http://localhost:8083/api/medicos')
  // 			.map((res: Response) => {
  // 				let body = res.json();
  // 				return body || {};
  // 			})
  //       .subscribe(medicos => { this.medicos = medicos; console.log(this.medicos) });
  // }

  ngOnInit(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.get('http://localhost:8083/api/medicos',{ headers: headers })
        .map((res: Response) => {
          let body = res.json();
          return body || {};
        })
        .subscribe(medicos => { this.medicos = medicos; console.log(this.medicos) } )
  }

}
