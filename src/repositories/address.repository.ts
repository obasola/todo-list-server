import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, repository} from '@loopback/repository';
import {SakilaDsDataSource} from '../datasources';
import {Address, AddressRelations} from '../models';
import {CityRepository} from './city.repository';

export class AddressRepository extends DefaultCrudRepository<
  Address,
  typeof Address.prototype.address_id,
  AddressRelations
> {


  constructor(
    @inject('datasources.sakilaDS') dataSource: SakilaDsDataSource, @repository.getter('CityRepository') protected cityRepositoryGetter: Getter<CityRepository>,
  ) {
    super(Address, dataSource);
  }
}
