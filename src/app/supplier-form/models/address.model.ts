import { City } from "./city.model";
import { State } from "./state.model";

export class Address {
  address: string = '';
  number: string = '';
  zipCode: string = '';
  complement: string = '';
  district: string = '';
  city: City = { cityCode: '', cityInternalId: '', cityDescription: '' };
  state: State = { stateId: '', stateInternalId: '', stateDescription: '' };

  constructor(obj: Partial<Address> = {}) {
    Object.assign(this, obj);
  }
}
