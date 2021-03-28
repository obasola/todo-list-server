import {Entity, model, property} from '@loopback/repository';

@model({name: 'country'})
export class Country extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  country_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'date',

  })
  last_update: string;


  constructor(data?: Partial<Country>) {
    super(data);
  }
}

export interface CountryRelations {
  // describe navigational properties here
}

export type CountryWithRelations = Country & CountryRelations;
