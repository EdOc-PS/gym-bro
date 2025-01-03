import { PersonResponseDTO } from "src/dtos/response/person.response.dto";
import { Person } from "src/models/person.model";

export class PersonToPersoResponseDTOUtility {

    public toPersonResponse(person: Person): PersonResponseDTO {
        return new PersonResponseDTO(person)
    }
}