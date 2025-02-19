export class City {
  cityCode: string = '';
  cityInternalId: string = '';
  cityDescription: string = '';

  constructor(obj: Partial<City> = {}) {
    Object.assign(this, obj);
  }
}
