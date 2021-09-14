"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
require("dotenv/config");
const app_1 = (0, tslib_1.__importDefault)(require("./app"));
const index_route_1 = (0, tslib_1.__importDefault)(require("./routes/index.route"));
const teamlogger_route_1 = (0, tslib_1.__importDefault)(require("./routes/teamlogger.route"));
const validateEnv_1 = (0, tslib_1.__importDefault)(require("./utils/validateEnv"));
const zoho_route_1 = (0, tslib_1.__importDefault)(require("./routes/zoho.route"));
(0, validateEnv_1.default)();
const app = new app_1.default([new index_route_1.default(), new teamlogger_route_1.default(), new zoho_route_1.default()]);
app.listen();
//# sourceMappingURL=server.js.map