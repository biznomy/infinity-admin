import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import { PostsService } from './../../services/post.service'

declare var $:any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers :[PostsService]
})

export class HomeComponent implements OnInit{
   posts :Post[];
   users : User[];
   totalUsersCount : number;
   totalPostsCount: number;
   totalCommentsCount: number;
   totalLikesCount: number ;
   constructor (private postsService : PostsService){
   
   }
    ngOnInit(){
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        initDemo();
            this.postsService.getPost().subscribe(post => {
                this.posts = post;
               
                })
            this.postsService.getUser().subscribe(users => {
                this.users = users;
               
                })
            this.postsService.getAdmin("dashboard").subscribe(count => {
                this.totalUsersCount = count.totalUsersCount;
                this.totalPostsCount = count.totalPostsCount;
            this.totalCommentsCount =count.totalCommentsCount;
                this.totalLikesCount = count.totalLikesCount;
                })
   
}
}
interface User{
    _id : number ;
    name : string ;
    email : string ;
    //address: Address ;
    state : string;
}
interface Post{
    id : string;
    title: string;
    body :string
}
interface Address{
    city :string;
}