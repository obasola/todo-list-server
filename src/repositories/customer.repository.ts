import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SakilaDsDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.customer_id,
  CustomerRelations
> {
  constructor(
    @inject('datasources.sakilaDS') dataSource: SakilaDsDataSource,
  ) {
    super(Customer, dataSource);
  }
}
