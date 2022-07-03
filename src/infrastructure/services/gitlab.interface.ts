import { Injectable } from '@nestjs/common'

import { IGitlabService } from 'src/domain/adapters/gitlab.interface'



@Injectable()
export class GitlabService implements IGitlabService {

    async getMergeRequests(param: string): Promise<string> {
        return param
    }
}