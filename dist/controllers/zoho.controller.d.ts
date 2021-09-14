import { NextFunction, Request, Response } from 'express';
import { InviteZohoService } from '../services/zoho.service';
declare class ZohoController {
    userService: InviteZohoService;
    inviteUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default ZohoController;
