/* eslint-disable prettier/prettier */
import { Router } from 'express';
import ZohoController from '@/controllers/zoho.controller';
import { Routes } from '@interfaces/routes.interface';

class ZohoRoute implements Routes {
  public path = '/invite_zoho';
  public router = Router();
  public InviteController = new ZohoController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.InviteController.inviteUser);
  }
}

export default ZohoRoute;
