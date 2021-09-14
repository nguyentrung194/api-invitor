import { NextFunction, Request, Response } from 'express';
import { InviteTeamloggerService } from '../services/teamlogger.service';
declare class TeamloggerController {
    userService: InviteTeamloggerService;
    inviteUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default TeamloggerController;
