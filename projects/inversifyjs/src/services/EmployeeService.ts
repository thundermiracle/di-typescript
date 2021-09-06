import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { TYPES } from '../bindings/types';

import Employee from '../entities/Employee';
import sleep from '../utils/sleep';
import { IProjectService } from './ProjectService';

export interface IEmployeeService {
  getEmployee(id: number): Promise<Employee>;
  getEmployees(): Promise<Employee[]>;
}

@injectable()
export default class EmployeeService implements IEmployeeService {
  public constructor(
    @inject(TYPES.ProjectService) private _projectService: IProjectService,
  ) {}

  async getEmployee(id: number): Promise<Employee> {
    console.log(`getEmployee: ${id}`);
    await sleep(500);

    const project = await this._projectService.getProject(`proj_id_${id + 1}`);

    return new Employee(
      id,
      `dummy_name_${id}`,
      'male',
      Math.random() * 100,
      project,
    );
  }

  async getEmployees(): Promise<Employee[]> {
    console.log(`getEmployees`);
    await sleep(1000);

    return await Promise.all(
      Array.from({ length: 10 }).map((_, index) =>
        this._projectService.getProject(`proj_id_${index + 1}`),
      ),
    ).then((projects) =>
      projects.map(
        (project, index) =>
          new Employee(
            index,
            `dummy_name_${index}`,
            'male',
            Math.ceil(Math.random() * 100),
            project,
          ),
      ),
    );
  }
}
