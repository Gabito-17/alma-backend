import { PartialType } from '@nestjs/swagger';
import { CreateSecretarioDto } from './create-secretario.dto';

export class UpdateSecretarioDto extends PartialType(CreateSecretarioDto) {}
