import TeamloggerController from '../controllers/teamlogger.controller';
import { Routes } from '../interfaces/routes.interface';
declare class TeamloggerRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    InviteController: TeamloggerController;
    constructor();
    private initializeRoutes;
}
export default TeamloggerRoute;
