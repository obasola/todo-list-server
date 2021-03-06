import {Entity, model, property} from '@loopback/repository';

@model({name: 'address'})
export class Address extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  address_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
  })
  address2?: string;

  @property({
    type: 'string',
    required: true,
  })
  district: string;

  @property({
    type: 'number',
    required: true,
  })
  city_id: number;

  @property({
    type: 'string',
    required: true,
  })
  postal_code: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  location?: string;

  @property({
    type: 'date',
  })
  last_update?: string;


  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;
