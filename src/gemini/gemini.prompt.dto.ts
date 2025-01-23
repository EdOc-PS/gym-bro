import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class PromptDTO {
    @Expose()
    @IsNotEmpty()
    @IsString()
    message: string
}