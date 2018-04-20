import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	public medicos : any[];

  constructor(public navCtrl: NavController, private http: Http) {

  }

  ngOnInit() {
      /**
      * O Webservice consumido é um projeto local, também disponível no github:
      * https://github.com/taciobrito/php-webservice
      */
  		this.http.get('http://localhost:8083/api/medicos')
  			.map((res: Response) => {
  				let body = res.json();
  				return body || {};
  			})
  			.subscribe(medicos => {this.medicos = medicos;});
  }

}
