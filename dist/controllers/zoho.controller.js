"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zoho_service_1 = require("../services/zoho.service");
class ZohoController {
    constructor() {
        this.userService = new zoho_service_1.InviteZohoService();
        this.inviteUser = async (req, res, next) => {
            try {
                const email = decodeURIComponent(String(req.body.email));
                const ten = String(req.body.ten);
                const ho = String(req.body.ho);
                const token = String(req.body.token);
                const input = { email, ten, ho, token };
                const inviteUserData = await this.userService.inviteUser(input);
                if (inviteUserData == 'undefined') {
                    res.status(400).json({ data: 'Email not found', message: 'Bad request' });
                }
                else {
                    res.status(200).json({ data: inviteUserData, message: 'invite' });
                }
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = ZohoController;
//# sourceMappingURL=zoho.controller.js.map