import { Container } from 'inversify';
import { TYPES } from './bindings/types';
import EmployeeService, { IEmployeeService } from './services/EmployeeService';
import ProjectService, { IProjectService } from './services/ProjectService';

const container = new Container();
container
  .bind<IEmployeeService>(TYPES.EmployeeService)
  .to(EmployeeService)
  .inSingletonScope();
container
  .bind<IProjectService>(TYPES.ProjectService)
  .to(ProjectService)
  .inSingletonScope();

export { container };
