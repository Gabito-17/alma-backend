import { HttpException, HttpStatus } from '@nestjs/common';

export class tipoDocumentoAlreadyExistsException extends HttpException {
  constructor() {
    super('este tipo de documento ya existe', HttpStatus.CONFLICT);
  }
}
export class tipoDocumentoRelationsException extends HttpException {
  constructor() {
    super('este tipo de documento tiene relaciones', HttpStatus.CONFLICT);
  }
}
