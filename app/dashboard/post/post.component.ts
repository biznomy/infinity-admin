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
   refresh : boolean;
   search : boolean;
   searchForm:any;

   showsearch:boolean;
   constructor (private postsService : PostsService){
    this.postsService.getAdmin("post").subscribe(posts => {
      this.posts = posts.data;
      this.count = posts.count;
      this.refresh = false;
      this.search = true;
      this.searchForm = {'fa fa-refresh': this.refresh , 'fa fa-search' : this.search}
    })

   }
   searchValue(ds){
   this.postsService.getSearch(ds, "post").subscribe(posts => {
   this.posts = posts.data;
   this.count = posts.count;
   this.search = false;
   this.refresh = true ;

   })
   return false;
   }


}
