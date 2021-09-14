"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const teamlogger_controller_1 = (0, tslib_1.__importDefault)(require("../controllers/teamlogger.controller"));
class TeamloggerRoute {
    constructor() {
        this.path = '/invite_teamlogger';
        this.router = (0, express_1.Router)();
        this.InviteController = new teamlogger_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}`, this.InviteController.inviteUser);
    }
}
exports.default = TeamloggerRoute;
//# sourceMappingURL=teamlogger.route.js.map