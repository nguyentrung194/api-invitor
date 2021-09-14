import { Router } from 'express';
import TeamloggerController from '@/controllers/teamlogger.controller';
import { Routes } from '@interfaces/routes.interface';

class TeamloggerRoute implements Routes {
  public path = '/invite_teamlogger';
  public router = Router();
  public InviteController = new TeamloggerController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.InviteController.inviteUser);
  }
}

export default TeamloggerRoute;
