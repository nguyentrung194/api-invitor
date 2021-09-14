import { NextFunction, Request, Response } from 'express';
import { InviteTeamloggerService } from '@/services/teamlogger.service';
import { ROLE } from '@/interfaces/users.interface';

class TeamloggerController {
  public userService = new InviteTeamloggerService();

  public inviteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const role = ((req.body.role as string)?.toUpperCase() || 'EMPLOYEE') as ROLE;
      const name = String(req.body.ten + ' ' + req.body.ho);
      const email = String(req.body.ten + '.' + req.body.ho + '@gcall.vn');
      const input = { email, name, role };
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

export default TeamloggerController;
