import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { DatabaseConfig } from 'src/domain/system/configs/database.interface'
import { IGitlabConfig } from 'src/domain/system/configs/gitlab.interface'
import { IRedmineConfig } from 'src/domain/system/configs/redmine.interface'


@Injectable()
export class EnvironmentConfigService implements DatabaseConfig, IGitlabConfig, IRedmineConfig {

    constructor(
        private readonly _configService: ConfigService
    ) {}

    getApiKey(): string {
        return this._configService.get<string>('APIKEY') as string
    }

    getToken(): string {
        return this._configService.get<string>('GITLAB_TOKEN') as string
    }

    getUrl(): string {
        return this._configService.get<string>('GITLAB_URL') as string
    }

    getDatabaseHost(): string {
        return this._configService.get<string>('DATABASE_HOST') as string
    }

    getDatabasePort(): number {
        return this._configService.get<number>('DATABASE_PORT') as number
    }

    getDatabaseUser(): string {
        return this._configService.get<string>('DATABASE_USER')  as string
    }

    getDatabasePassword(): string {
        return this._configService.get<string>('DATABASE_PASSWORD') as string
    }

    getDatabaseName(): string {
        return this._configService.get<string>('DATABASE_NAME') as string
    }

    getDatabaseSchema(): string {
        return this._configService.get<string>('DATABASE_SCHEMA') as string
    }

    getDatabaseSync(): boolean {
        return this._configService.get<boolean>('DATABASE_SYNCHRONIZE') as boolean
    }
}