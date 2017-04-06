"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var log_routeConfig_1 = require("./log-routeConfig");
var loginComponent = (function () {
    function loginComponent() {
    }
    loginComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/material-dashboard.js');
    };
    loginComponent.prototype.submitValue = function (email, password) {
        this.parentRouter = log_routeConfig_1.ROUTES;
        this.router.parent.navigate(['/dashboard']);
        return false;
    };
    return loginComponent;
}());
loginComponent = __decorate([
    core_1.Component({
        selector: 'login-cmp',
        moduleId: module.id,
        templateUrl: 'log.component.html',
    })
], loginComponent);
exports.loginComponent = loginComponent;
//# sourceMappingURL=log.component.js.map