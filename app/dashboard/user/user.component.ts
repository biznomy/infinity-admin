import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { PostsService } from './../../services/post.service';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
     providers :[PostsService]
})

export class UserComponent implements OnInit{
	info : Info;
    _id : string;
    

    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
    
        }
      
   constructor(private route: ActivatedRoute, private location: Location, private postsService : PostsService) { 
        this._id = route.snapshot.params['_id']
        alert(this._id)
     }
}
interface Info{
	_id : string;
    photoURL : string;
    name : string;
    email : string;
    bio : string;
    city : string;
    state : string;
    phone : string;
    pincode : number;
    gender : string;
}