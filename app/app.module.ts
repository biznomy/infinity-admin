import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        RouterModule.forRoot([]),
        HttpModule,
        Ng2PaginationModule
       
    ],
    declarations: [ AppComponent, DashboardComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
