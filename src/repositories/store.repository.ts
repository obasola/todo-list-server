import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SakilaDsDataSource} from '../datasources';
import {Store, StoreRelations} from '../models';

export class StoreRepository extends DefaultCrudRepository<
  Store,
  typeof Store.prototype.store_id,
  StoreRelations
> {
  constructor(
    @inject('datasources.sakilaDS') dataSource: SakilaDsDataSource,
  ) {
    super(Store, dataSource);
  }
}
