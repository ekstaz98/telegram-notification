import { Injectable } from '@nestjs/common'

import { IHttpService } from 'src/domain/adapters/http.interface'


@Injectable()
export class HttpService implements IHttpService {

    async sendRequest(param: string): Promise<string> {
        return param
    }
}