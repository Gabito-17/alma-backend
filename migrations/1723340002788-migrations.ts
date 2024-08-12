import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1723339154373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const batchSize = 1000; // Tamaño del lote
    const totalRecords = 150000;

    for (let i = 0; i < totalRecords; i += batchSize) {
      const pacientes = [];

      for (let j = i + 1; j <= Math.min(i + batchSize, totalRecords); j++) {
        pacientes.push(
          `(
                        'DNI${j}',
                        'Nombre${j}',
                        'Apellido${j}',
                        '123456789${j}',
                        'Direccion${j}',
                        'Masculino',
                        '1980-01-01',
                        'email${j}@example.com',
                        'Ocupacion${j}',
                        24, -- id_tipo_documento asumiendo valor 1
                        1, -- estadoCivilIdEstadoCivil asumiendo valor 1
                        1  -- psicologoAsignadoId asumiendo valor 1
                    )`,
        );
      }

      const query = `
                INSERT INTO paciente 
                (
                    "numeroDoc", 
                    nombre, 
                    apellido, 
                    telefono, 
                    direccion, 
                    sexo, 
                    "fechaNacimiento", 
                    email, 
                    ocupacion, 
                    id_tipo_documento, 
                    "estadoCivilIdEstadoCivil", 
                    "psicologoAsignadoId"
                )
                VALUES ${pacientes.join(', ')}
            `;

      await queryRunner.query(query);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM paciente WHERE email LIKE 'email%@example.com'`,
    );
  }
}
