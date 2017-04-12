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
    

    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
       this.info = this.route.params.value
     
        }
      
   constructor(private route: ActivatedRoute, private location: Location) {
      
     }
}
interface Info{
	id : string;
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