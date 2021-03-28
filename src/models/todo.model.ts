import {Entity, model, property} from '@loopback/repository';

@model({name: 'todo'})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  todo_id?: number;

  @property({
    type: 'number',
    required: true,
  })
  owner_id: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'boolean',
    required: false,
  })
  complete?: boolean;

  @property({
    type: 'date',
    required: true,
  })
  due_date: string;

  @property({
    type: 'date',
  })
  create_date: string;

  @property({
    type: 'date',
  })
  update_date: string;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
