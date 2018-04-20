import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';

import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public pokes: any[];

  constructor(public navCtrl: NavController, private http: Http) {

  }

  ngOnInit(){
    this.http.get('http://pokeapi.co/api/v2/pokemon')
  			.map((res: Response) => {
  				let body = res.json();
  				return body || {};
  			})
        .subscribe(pokes => { this.pokes = pokes.results; });
  }

}
