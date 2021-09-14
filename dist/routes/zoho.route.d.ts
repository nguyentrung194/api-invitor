import ZohoController from '../controllers/zoho.controller';
import { Routes } from '../interfaces/routes.interface';
declare class ZohoRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    InviteController: ZohoController;
    constructor();
    private initializeRoutes;
}
export default ZohoRoute;
