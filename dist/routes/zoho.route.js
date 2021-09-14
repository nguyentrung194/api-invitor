"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable prettier/prettier */
const express_1 = require("express");
const zoho_controller_1 = (0, tslib_1.__importDefault)(require("../controllers/zoho.controller"));
class ZohoRoute {
    constructor() {
        this.path = '/invite_zoho';
        this.router = (0, express_1.Router)();
        this.InviteController = new zoho_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}`, this.InviteController.inviteUser);
    }
}
exports.default = ZohoRoute;
//# sourceMappingURL=zoho.route.js.map