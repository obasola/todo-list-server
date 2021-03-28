import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SakilaDsDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.todo_id,
  TodoRelations
> {
  constructor(
    @inject('datasources.sakilaDS') dataSource: SakilaDsDataSource,
  ) {
    super(Todo, dataSource);
  }
}
