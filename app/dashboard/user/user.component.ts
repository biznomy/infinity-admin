import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { PostsService } from './../../services/post.service';
//import { UserInfo } from './../interface';
//import {Posts} from './../interface';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
     providers :[PostsService]
})

export class UserComponent implements OnInit{
    _id : string;
    posts:Posts;
    comments:Posts;
    likes:Posts;
    photoURL : string;
    name : string;
    email : string;
    bio : string;
    city : string;
    state : string;
    phone : string;
    pincode : number;
    gender : string;
    posts : Post;
    likes : Like;
    comments : Comment;
    postCount : number;
    likeCount : number ;
    commentCount : number;

    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
    this.postsService.getAdmin("person/"+this._id).subscribe(user => {
      this._id = user._id;
    this.photoURL = user.photoURL;
    this.name = user.name;
    this.email = user.email;
    this.bio = user.bio;
    this.city = user.city;
    this.state = user.state;
    this.phone = user.phone;
    this.pincode = user.pincode;
    this.gender = user.gender;           
    })
     this.postsService.getAdmin("userinfo/"+this._id).subscribe(infos => {
           this.posts = infos.posts.data
           this.comments = infos.comments.data
           this.likes = infos.likes.data
           this.postCount = infos.posts.count
           this.likeCount = infos.likes.count
           this.commentCount = infos.comments.count

    })

        }
      
   constructor(private route: ActivatedRoute, private location: Location, private postsService : PostsService) { 
       
        this._id = route.snapshot.params['_id'];
       
        
     }
}
interface Post{
    files :Files
}
interface Like{
    
}
interface Comment{
    
}
interface Files{
   url : string; 
}