import { IAccount } from '../../interfaces/account/account';

export class Account implements IAccount {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(account: Partial<Account | undefined>) {
    Object.assign(this, account);
  }
}
