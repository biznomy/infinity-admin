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
var dashboard_component_1 = require("./../dashboard/dashboard.component");
var start_component_1 = require("./start.component");
exports.StartComponent = start_component_1.StartComponent;
var dashboard_module_1 = require("./../dashboard/dashboard.module");
var sidebar_module_1 = require("./../sidebar/sidebar.module");
var footer_module_1 = require("./../shared/footer/footer.module");
var navbar_module_1 = require("./../shared/navbar/navbar.module");
var StartComponent = StartComponent_1 = (function () {
    function StartComponent() {
    }
    return StartComponent;
}());
StartComponent = StartComponent_1 = __decorate([
    core_1.NgModule({
        imports: [
            dashboard_module_1.DashboardModule,
            sidebar_module_1.SidebarModule,
            footer_module_1.FooterModule,
            navbar_module_1.NavbarModule,
            router_1.RouterModule.forRoot([]),
        ],
        declarations: [StartComponent_1, dashboard_component_1.DashboardComponent]
    })
], StartComponent);
exports.StartComponent = StartComponent;
var StartComponent_1;
//# sourceMappingURL=start.module.js.map