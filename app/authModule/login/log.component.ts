import { Component, OnInit } from '@angular/core';
import { ROUTES } from './log-routeConfig';

@Component({
    selector: 'login-cmp',
     moduleId: module.id,
    templateUrl: 'log.component.html',
})

export class loginComponent implements OnInit{
    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');

    }
    submitValue(email, password){
   	this.parentRouter = ROUTES;
    this.router.parent.navigate(['/dashboard']);

    return false;
    }
}


