import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'sakilaDS',
  connector: 'mysql',
  url: 'mysql://dthompson:babyLon05!@localhost/sakila',
  host: 'localhost',
  port: 3306,
  user: 'dthompson',
  password: 'babyLon05!',
  database: 'sakila'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SakilaDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'sakilaDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.sakilaDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
