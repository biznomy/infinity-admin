"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var pipe_module_1 = require("./../custom_pipes/pipe.module");
var angular2_resizing_cropping_image_1 = require("angular2-resizing-cropping-image");
var forms_1 = require("@angular/forms");
var ng2_pagination_1 = require("ng2-pagination"); //importing ng2-pagination
var dashboard_routes_1 = require("./dashboard.routes");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
            pipe_module_1.PipeModule.forRoot(),
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            ng2_pagination_1.Ng2PaginationModule,
            forms_1.FormsModule,
            angular2_resizing_cropping_image_1.lyResizingCroppingImagesModule
        ],
        declarations: [dashboard_routes_1.MODULE_COMPONENTS]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map