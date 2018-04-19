import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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
  	let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
  	this.http.get('http://pokeapi.co/api/v2/pokemon',{ headers: headers })
  			.map((res: Response) => {
  				let body = res.json();
  				return body || {};
  			})
  			.subscribe(pokes => { this.pokes = pokes; console.log(this.pokes) } )
  }

}
