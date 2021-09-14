import { User } from '@/interfaces/users.interface';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import puppeteer from 'puppeteer';

import config from 'config';

export class InviteTeamloggerService {
  public async inviteUser({ email, name, role }: User): Promise<string> {
    function delay(time) {
      return new Promise(function (resolve) {
        setTimeout(resolve, time);
      });
    }
    if (isEmpty(email)) {
      throw new HttpException(400, 'Email not found!');
    } else {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto('https://client.teamlogger.com', { waitUntil: 'networkidle0' });
      await page.type('#input_0', config.get('mattermost.username'));
      await delay(1000);
      await page.type('#input_1', config.get('mattermost.password'));
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
