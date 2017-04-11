import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
	   _url : string
	constructor(private http : Http){
		this._url = "http://192.168.1.4:3200"
	}

	getPost(){
	return this.http.get('https://jsonplaceholder.typicode.com/Posts').map(res => res.json());
	}
	getUser(){
	//return this.http.get(this._url+"/admin").map(res => res.json());
	return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
	}
}