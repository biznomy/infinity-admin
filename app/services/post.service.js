"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        //this._url = "http://localhost:3210";
        //this._url = "http://138.197.217.75:3100"
        this._url = "http://localhost:3100";
        // this._url = "http://localhost:3100";
    }
    PostsService.prototype.getPost = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/Posts').map(function (res) { return res.json(); });
    };
    PostsService.prototype.getUser = function () {
        return this.http.get(this._url + "/admin/user/list").map(function (res) { return res.json(); });
        //return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
    };
    PostsService.prototype.getSearch = function (text, model) {
        return this.http.get(this._url + "/admin/search/user?text=" + text + "&model=" + model).map(function (res) { return res.json(); });
    };
    PostsService.prototype.getAdmin = function (text) {
        return this.http.get(this._url + "/admin/" + text).map(function (res) { return res.json(); });
    };
    PostsService.prototype.sendData = function (url, data) {
        var formData = new FormData();
        for (var i in data) {
            formData.append(i, data[i]);
        }
        return this.http.put(this._url + '/admin/user/detail/' + data._id, data)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.putData = function (url, data) {
        var formData = new FormData();
        for (var i in data) {
            formData.append(i, data[i]);
        }
        return this.http.put(this._url + "/admin" + url, data)
            .map(function (res) { return res.json(); });
    };
    return PostsService;
}());
PostsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=post.service.js.map