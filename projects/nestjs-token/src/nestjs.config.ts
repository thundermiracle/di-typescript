import { Module } from '@nestjs/common';
import { TYPES } from 'common/bindings/types';
import EmployeeService from './services/EmployeeService';
import ProjectService from './services/ProjectService';

@Module({
  providers: [
    {
      provide: TYPES.ProjectService,
      useClass: ProjectService,
    },
    {
      provide: TYPES.EmployeeService,
      useClass: EmployeeService,
    },
  ],
})
export class AppModule {}
