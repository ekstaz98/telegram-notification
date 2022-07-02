import { ConfigModule, ConfigService } from '@nestjs/config'
import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const database = configService.get<string>('PSQL_DATABASE')
        if (database === undefined) {
            throw new Error(
                "Environment variable 'PSQL_DATABASE' cannot be undefined",
            )
        }
        
        const port = 5432

        return {
            type: 'postgres',
            entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
            database,
            host: configService.get<string>('PSQL_HOST', 'localhost'),
            port: configService.get<number>('PSQL_PORT', port),
            username: configService.get<string>('PSQL_USERNAME'),
            password: configService.get<string>('PSQL_PASSWORD'),
            synchronize: false,
        }
    },
    inject: [ConfigService],
}
