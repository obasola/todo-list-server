import {Entity, model, property} from '@loopback/repository';

@model({name: 'store'})
export class Store extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  store_id?: number;

  @property({
    type: 'number',
    required: true,
  })
  manager_staff_id: number;

  @property({
    type: 'number',
    required: true,
  })
  address_id: number;

  @property({
    type: 'date',
  })
  last_update: string;


  constructor(data?: Partial<Store>) {
    super(data);
  }
}

export interface StoreRelations {
  // describe navigational properties here
}

export type StoreWithRelations = Store & StoreRelations;
