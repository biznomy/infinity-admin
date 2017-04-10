import { Component } from '@angular/core';
import { PostsService } from './../../services/post.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    providers :[PostsService]
})

export class TableComponent{
   users : User[];
   constructor (private postsService : PostsService){
    this.postsService.getUser().subscribe(users => {
    this.users = users;
   	
    })
   }
   searchValue(ds){
   alert("hi");
   return false;
   }
}
interface User{
    _id : number ;
    photoURL : string;
    name : string ;
    email : string ;
    state : string;
}