import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as entities from '../entities';
import * as subscribers from '../subscribers';

const connectionOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'user',
  password: 'password',
  database: 'testDb',
  logging: true,
  dropSchema: true,
  synchronize: true,
  entities: Object.values(entities),
  subscribers: Object.values(subscribers),
};

export const dataSource = new DataSource(connectionOptions);
