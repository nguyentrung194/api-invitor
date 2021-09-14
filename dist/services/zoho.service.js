"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteZohoService = void 0;
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const util_1 = require("../utils/util");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
class InviteZohoService {
    async inviteUser({ email, ten, ho }) {
        if ((0, util_1.isEmpty)(email)) {
            throw new HttpException_1.HttpException(400, 'Email not found!');
        }
        else {
            const token = await (0, axios_1.default)({
                method: 'POST',
                url: 'https://accounts.zoho.com/oauth/v2/token',
                params: {
                    scope: 'ZohoMail.organization.groups.ALL,ZohoMail.partner.organization.ALL',
                    redirect_uri: 'http://localhost:8080',
                    client_id: '1000.G9LJDYB2RQ14IZRDGIWSTZ93VLB37S',
                    client_secret: 'f432ee76f42fc28344ebef05313a18ad2f7b53ec0b',
                    grant_type: 'refresh_token',
                    refresh_token: '1000.81862687d7afe54d15a247f063638db5.0a0a1d60a0045962779e799aacdea50e',
                },
            })
                .then(res => {
                return res.data.access_token;
            })
                .catch(rej => {
                console.log(rej);
                return 0;
            });
            if (!token) {
                throw new HttpException_1.HttpException(400, 'Error token invalid');
            }
            const result = await (0, axios_1.default)({
                method: 'POST',
                url: `https://mail.zoho.com/api/organization/63350232/groups`,
                data: {
                    emailId: ten + '.' + ho + '@gcall.vn',
                    name: ho + '.' + ten,
                    mailGroupMemberList: [
                        {
                            memberEmailId: email,
                            role: 'Member',
                        },
                    ],
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                console.log(res);
                // console.log('oke');
                return res.data;
            })
                .catch((err) => {
                // console.log('error');
                console.log(err);
                throw new HttpException_1.HttpException(400, err);
            });
            return result;
        }
    }
}
exports.InviteZohoService = InviteZohoService;
//# sourceMappingURL=zoho.service.js.map