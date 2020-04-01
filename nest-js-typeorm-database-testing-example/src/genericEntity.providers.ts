import { Connection } from "typeorm";
import { GenericEntity } from "./generic.entity";

export const genericEntityProviders = [
    {
        provide: 'GENERIC_ENTITY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(GenericEntity),
        inject: ['DATABASE_CONNECTION']
    }
]