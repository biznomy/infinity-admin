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
var initDemo = require("../../../assets/js/charts.js");
var post_service_1 = require("./../../services/post.service");
var HomeComponent = (function () {
    function HomeComponent(postsService) {
        this.postsService = postsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        initDemo();
        //  this.postsService.getPost().subscribe(post => {
        //    this.posts = post;
        //  })
        this.postsService.getAdmin("post").subscribe(function (posts) {
            _this.posts = posts.data;
            _this.count = posts.count;
        });
        this.postsService.getUser().subscribe(function (users) {
            _this.users = users;
        });
        this.postsService.getAdmin("dashboard").subscribe(function (count) {
            _this.totalUsersCount = count.totalUsersCount;
            _this.totalPostsCount = count.totalPostsCount;
            _this.totalCommentsCount = count.totalCommentsCount;
            _this.totalLikesCount = count.totalLikesCount;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-cmp',
        moduleId: module.id,
        templateUrl: 'home.component.html',
        providers: [post_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [post_service_1.PostsService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map