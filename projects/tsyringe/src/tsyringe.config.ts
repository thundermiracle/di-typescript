import { container as tsyContainer, Lifecycle } from 'tsyringe';
import { TYPES } from 'common/bindings/types';
import EmployeeService from './services/EmployeeService';
import ProjectService from './services/ProjectService';

const container = tsyContainer.createChildContainer();

container.register(TYPES.ProjectService, ProjectService, { lifecycle: Lifecycle.Singleton });
container.register(TYPES.EmployeeService, EmployeeService, { lifecycle: Lifecycle.Singleton });

export { container };
