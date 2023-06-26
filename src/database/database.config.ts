import { DataSource, DataSourceOptions } from "typeorm"

export const dataSourceOptions: DataSourceOptions = 
{
    type: "postgres",
    username:"postgres",
    password:"Ismael2003Andrade",
    host:"localhost",
    port: 5432,
    database:"YaviFashon",
    entities: [__dirname + '../modules/**/**/entities/*.entity.{ts,js}'],
    migrations: ["./migrations"],
    migrationsRun: true,
    synchronize: false,
    
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;