import { HttpException, HttpStatus } from '@nestjs/common';

export class estadoCivilAlreadyExistsException extends HttpException {
constructor(){
    super('este estado civil ya existe', HttpStatus.CONFLICT)
}
}
export class estadoCivilRelationsException extends HttpException {
    constructor(){
        super('este estado civil tiene relaciones', HttpStatus.CONFLICT)
    }
    }