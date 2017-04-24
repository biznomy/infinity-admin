import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import {Router,Params , RouterModule }   from '@angular/router';


declare var $:any;

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    islogin : boolean;
    location: Location;

    ngOnInit(){
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
    public isMaps(path){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(path == titlee){
            return false;
        }
        else {
            return true;
        }
    }
    constructor( private router: Router ,location: Location) {
     this.location = location;
     var d = new Date();
     if(localStorage.getItem("inf-admin-auth") !== null && localStorage.getItem("inf-admin-auth") !== "" && localStorage.getItem("inf-admin-auth") !== undefined && localStorage.getItem("inf-admin-auth") > d.getTime()){
       this.islogin = true;
       this.router.navigate(['/dashboard']);
     }else{
       this.islogin = false;
     }

}
    submitValue(email,password){
    if(email.indexOf("admin1@infinity.com") > -1 && password === "adminInfinity"){
        this.islogin = true;
        this.location = location;
        var d = new Date();
        d.setHours(d.getHours() +3);

        localStorage.setItem("inf-admin-auth",(d.getTime());
        var nav = this.router;
        setTimeout(function(){
            nav.navigate(['/dashboard']);
          },500)

    }
  }else{
    this.islogin = false;
  }
}
