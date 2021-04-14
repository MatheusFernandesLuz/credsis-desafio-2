import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class TabelaMunicipio1618366935232 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Municipio',
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
        },
        {
          name: "nome",
          type: "varchar",
          length: "255",
          isNullable: false,
        },
        {
          name: "prefeito",
          type: "varchar",
          length: "255",
          isNullable: true,
        },
        {
          name: "populacao",
          type: "integer",
          isNullable: true,
        },
        {
          name: "estado",
          type: 'integer',
          isNullable: false,
        }
      ]
    }))

    await queryRunner.createForeignKey("Municipio", new TableForeignKey({
      columnNames: ['estado'],
      referencedColumnNames: ["id"],
      referencedTableName: "Estado",
      onDelete: "CASCADE"
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Municipio');
  }

}
