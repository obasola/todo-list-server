import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, repository} from '@loopback/repository';
import {SakilaDsDataSource} from '../datasources';
import {City, CityRelations} from '../models';
import {AddressRepository} from './address.repository';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.city_id,
  CityRelations
> {

  constructor(
    @inject('datasources.sakilaDS') dataSource: SakilaDsDataSource, @repository.getter('AddressRepository') protected addressRepositoryGetter: Getter<AddressRepository>,
  ) {
    super(City, dataSource);

  }
}
