import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonModel } from "src/models/person.model";
import { Repository } from "typeorm";

@Controller('/person')
export class PersonFindController {

    constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>) { }

    @Get('/:id')
    public async find(@Param('id') id: string): Promise<PersonModel> {
        const person = await this.model.findOne({ where: { id } });
        if (!person)
            throw new NotFoundException('Person not found');
        return person
    }
}