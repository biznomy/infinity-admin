import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
	   _url : string
	constructor(private http : Http){
		this._url = "http://localhost:3210"
	}

	getPost(){
	return this.http.get('https://jsonplaceholder.typicode.com/Posts').map(res => res.json());
	}
	getUser(){
	return this.http.get(this._url+"/admin/user/list").map(res => res.json());
	//return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
	}
	getSearch(text , model){
	return this.http.get(this._url+"/admin/search/user?text="+text+"&model="+model).map(res => res.json());
	}
	getAdmin(text){
	return this.http.get(this._url+"/admin/"+text).map(res => res.json());
	}
}
