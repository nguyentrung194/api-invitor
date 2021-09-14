import { User } from '../interfaces/users.interface';
export declare class InviteTeamloggerService {
    inviteUser({ email, name, role }: User): Promise<string>;
}
