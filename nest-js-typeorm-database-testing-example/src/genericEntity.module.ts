import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { genericEntityProviders } from "./genericEntity.providers";
import { GenericEntityService } from "./genericEntity.service";


@Module({
    imports: [DatabaseModule],
    providers: [
        ...genericEntityProviders,
        GenericEntityService
    ]
})
export class GenericEntityModule {

}