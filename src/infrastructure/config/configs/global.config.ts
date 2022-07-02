import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces'

process.env.NTBA_FIX_319 = 'true'
export const config: ConfigModuleOptions = {
    envFilePath: ['.env.development', '.env.production'],
    isGlobal: true,
    expandVariables: true,
}
