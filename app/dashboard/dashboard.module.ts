import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PipeModule } from './../custom_pipes/pipe.module';
import { lyResizingCroppingImagesModule } from 'angular2-resizing-cropping-image';

import { FormsModule } from '@angular/forms';

import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination

import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        PipeModule.forRoot(),
        HttpModule,
        BrowserModule,
        CommonModule,
        Ng2PaginationModule,
        FormsModule,
        lyResizingCroppingImagesModule

    ],
    declarations: [ MODULE_COMPONENTS]
})

export class DashboardModule{}
