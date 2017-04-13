import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination

import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        HttpModule,
        BrowserModule,
        CommonModule,
        Ng2PaginationModule
       
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
