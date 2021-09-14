process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import IndexRoute from '@routes/index.route';
import TeamloggerRoute from '@/routes/teamlogger.route';
import validateEnv from '@utils/validateEnv';
import ZohoRoute from './routes/zoho.route';

validateEnv();

const app = new App([new IndexRoute(), new TeamloggerRoute(), new ZohoRoute()]);

app.listen();
