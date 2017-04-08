"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var start_component_1 = require("./start/start.component");
var log_component_1 = require("./login/log.component");
exports.routing = [
    { path: '', component: log_component_1.LoginComponent },
    { path: 'dashboards', component: start_component_1.StartComponent }
];
//# sourceMappingURL=app.routing.js.map