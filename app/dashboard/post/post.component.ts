import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../../services/post.service';

@Component({
    selector: 'post-cmp',
    moduleId: module.id,
    templateUrl: 'post.component.html',
    providers :[PostsService]
})

export class PostComponent{
   posts : string[];
   count : number;
   searchIcon:any;

   showsearch:boolean;
   constructor (private postsService : PostsService){
    this.postsService.getAdmin("post").subscribe(posts => {
      this.posts = posts.data;
      this.count = posts.count;
      this.showsearch= false;
    })

   }
   searchValue(ds){
   this.showsearch = true;
   this.postsService.getSearch(ds, "post").subscribe(posts => {
   this.posts = posts.data;
   this.count = posts.count;
   this.showsearch = true;

   })
   return false;
   }
   searchValueRef(ds ,event){
     event.preventDefault();
     alert(this.showsearch)
     if(this.showsearch){
       this.showsearch= false;
       this.postsService.getAdmin("post").subscribe(posts => {
       this.posts = posts.data;
       this.count = posts.count;

       })

     }else{
       this.showsearch = true;
       this.postsService.getSearch(ds, "post").subscribe(posts => {
       this.posts = posts.data;
       this.count = posts.count;
       this.showsearch = true;

       })
     }
   }
//{'fa fa-refresh': this.refresh , 'fa fa-search' : this.search}

}
