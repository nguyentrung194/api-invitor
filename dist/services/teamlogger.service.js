"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteTeamloggerService = void 0;
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const util_1 = require("../utils/util");
const puppeteer_1 = (0, tslib_1.__importDefault)(require("puppeteer"));
const config_1 = (0, tslib_1.__importDefault)(require("config"));
class InviteTeamloggerService {
    async inviteUser({ email, name, role }) {
        function delay(time) {
            return new Promise(function (resolve) {
                setTimeout(resolve, time);
            });
        }
        if ((0, util_1.isEmpty)(email)) {
            throw new HttpException_1.HttpException(400, 'Email not found!');
        }
        else {
            const browser = await puppeteer_1.default.launch({ headless: false });
            const page = await browser.newPage();
            await page.goto('https://client.teamlogger.com', { waitUntil: 'networkidle0' });
            await page.type('#input_0', config_1.default.get('mattermost.username'));
            await delay(1000);
            await page.type('#input_1', config_1.default.get('mattermost.password'));
            await Promise.all([page.keyboard.press('Enter'), page.waitForNavigation({ waitUntil: 'networkidle0' })]);
            await page.goto('https://client.teamlogger.com/#/app/invite?mode=USER', { waitUntil: ['networkidle0', 'domcontentloaded'] });
            await delay(5000);
            await page.click("button[aria-label='Invite Another User']");
            await delay(2000);
            await page.type("input[name='inviteeName']", name);
            await delay(1000);
            await page.type("input[name='email']", email);
            await delay(1000);
            if (role === 'ADMIN') {
                await page.click("md-select[ng-model='invite.accountType']");
                await page.click("md-option[value='ADMIN']");
            }
            await delay(1000);
            await page.click("button[aria-label='Send Invite']");
            await delay(10000);
            await browser.close();
        }
        return email;
    }
}
exports.InviteTeamloggerService = InviteTeamloggerService;
//# sourceMappingURL=teamlogger.service.js.map