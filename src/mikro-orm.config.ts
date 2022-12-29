import { MikroOrmModule, MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: MikroOrmModuleSyncOptions = {
    entities: ['./dist/entities'],
    entitiesTs: ['./src/entities'],
    dbName: "ruff_school_db_test",
    type: 'postgresql',
    password:"Choupy270991",
    metadataProvider: TsMorphMetadataProvider,
    
    migrations: {
      path: './src/migrations',
      allOrNothing: true,
      disableForeignKeys: true,
    },
}

export default config;
