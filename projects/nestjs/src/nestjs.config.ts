import { Module } from '@nestjs/common';
import EmployeeService from './services/EmployeeService';
import ProjectService from './services/ProjectService';

@Module({
  providers: [
    {
      provide: ProjectService,
      useClass: ProjectService,
    },
    {
      provide: EmployeeService,
      useClass: EmployeeService,
    },
  ],
})

// The following is shorthand for the source above
// @Module({
//   providers: [ProjectService, EmployeeService],
// })
export class AppModule {}
