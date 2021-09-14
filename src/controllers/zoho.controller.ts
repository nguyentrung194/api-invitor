/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { InviteZohoService } from '@/services/zoho.service';

class ZohoController {
  public userService = new InviteZohoService();

  public inviteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const email = decodeURIComponent(String(req.body.email));
      const ten = String(req.body.ten);
      const ho = String(req.body.ho);
      const token = String(req.body.token);

      const input = { email, ten, ho, token };

      const inviteUserData = await this.userService.inviteUser(input);
      if (inviteUserData == 'undefined') {
        res.status(400).json({ data: 'Email not found', message: 'Bad request' });
      } else {
        res.status(200).json({ data: inviteUserData, message: 'invite' });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default ZohoController;
