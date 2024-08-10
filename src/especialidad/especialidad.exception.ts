import { HttpException, HttpStatus } from '@nestjs/common';

export class especialidadAlreadyExistsException extends HttpException {
constructor(){
    super('esta especialidad ya existe', HttpStatus.CONFLICT)
}
}
export class especialidadRelationsException extends HttpException {
    constructor(){
        super('esta especialidad tiene relaciones', HttpStatus.CONFLICT)
    }
    }