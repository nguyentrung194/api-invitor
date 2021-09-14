"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teamlogger_service_1 = require("../services/teamlogger.service");
class TeamloggerController {
    constructor() {
        this.userService = new teamlogger_service_1.InviteTeamloggerService();
        this.inviteUser = async (req, res, next) => {
            var _a;
            try {
                const role = (((_a = req.body.role) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'EMPLOYEE');
                const name = String(req.body.ten + ' ' + req.body.ho);
                const email = String(req.body.ten + '.' + req.body.ho + '@gcall.vn');
                const input = { email, name, role };
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
exports.default = TeamloggerController;
//# sourceMappingURL=teamlogger.controller.js.map