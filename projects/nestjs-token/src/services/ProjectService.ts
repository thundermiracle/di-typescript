import { Injectable } from '@nestjs/common';
import Project from 'common/entities/Project';
import sleep from 'common/utils/sleep';

export interface IProjectService {
  getProject(id: string): Promise<Project>;
}

@Injectable()
export default class ProjectService implements IProjectService {
  async getProject(id: string): Promise<Project> {
    console.log(`getProject: ${id}`);

    await sleep(300);

    const randomYear = Math.floor(Math.random() * 10);

    return new Project(id, `project_name_${id}`, `2021 ~ 202${randomYear}`);
  }
}
