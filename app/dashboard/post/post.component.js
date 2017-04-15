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
var post_service_1 = require("./../../services/post.service");
var PostComponent = (function () {
    function PostComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.postsService.getAdmin("post").subscribe(function (posts) {
            _this.posts = posts.data;
            _this.count = posts.count;
            _this.refresh = false;
            _this.search = true;
            _this.searchForm = { 'fa fa-refresh': _this.refresh, 'fa fa-search': _this.search };
        });
    }
    PostComponent.prototype.searchValue = function (ds) {
        var _this = this;
        this.postsService.getSearch(ds, "post").subscribe(function (posts) {
            _this.posts = posts.data;
            _this.count = posts.count;
            _this.search = false;
            _this.refresh = true;
        });
        return false;
    };
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        selector: 'post-cmp',
        moduleId: module.id,
        templateUrl: 'post.component.html',
        providers: [post_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [post_service_1.PostsService])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map