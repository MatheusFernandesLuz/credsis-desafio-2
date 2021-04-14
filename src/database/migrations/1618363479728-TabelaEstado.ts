import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TabelaEstado1618363479728 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Estado',
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
          name: "sigla",
          type: "varchar",
          length: "3",
          isNullable: false,
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Estado');
  }

}
