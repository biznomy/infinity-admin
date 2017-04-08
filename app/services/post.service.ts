import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
	
	constructor(private http : Http){
		console.log("post service initializied")
	}

	getPost(){
	return this.http.get('https://jsonplaceholder.typicode.com/Posts').map(res => res.json());
	}
	getUser(){
	return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
	}
}