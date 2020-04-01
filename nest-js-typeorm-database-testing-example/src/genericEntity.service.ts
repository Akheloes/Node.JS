import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { GenericEntity } from "./generic.entity";

export class GenericEntityService {
    constructor(
        @Inject('GENERIC_ENTITY_REPOSITORY')
        private genericEntityRepository: Repository<GenericEntity>
    ){}

    async find(): Promise<GenericEntity[]> {
        return this.genericEntityRepository.find();
    }
}