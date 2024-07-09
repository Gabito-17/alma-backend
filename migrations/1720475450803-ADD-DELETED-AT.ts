import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1720475450803 implements MigrationInterface {
    name = 'Migrations1720475450803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personas" ADD "deleteAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personas" DROP COLUMN "deleteAt"`);
    }

}
