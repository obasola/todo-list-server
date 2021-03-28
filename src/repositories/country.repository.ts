import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SakilaDsDataSource} from '../datasources';
import {Country, CountryRelations} from '../models';

export class CountryRepository extends DefaultCrudRepository<
  Country,
  typeof Country.prototype.country_id,
  CountryRelations
> {
  constructor(
    @inject('datasources.sakilaDS') dataSource: SakilaDsDataSource,
  ) {
    super(Country, dataSource);
  }
}
