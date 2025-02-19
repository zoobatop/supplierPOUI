import { Address } from "./address.model";

export class Supplier {
  companyInternalId: string = '';
  code: string  = '';
  name: string = '';
  storeId: string  = '';
  shortName: string = '';
  strategicCustomerType: string = '';
  registerSituation: string = '';
  type: number = 0;
  entityType: string = '';
  address: Address = new Address();

  constructor(obj = {}) {
      Object.assign(this, obj);
  }
}
