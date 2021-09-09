import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { TYPES } from 'common/bindings/types';
import { AppModule } from './nestjs.config';
import { IEmployeeService } from './services/EmployeeService';

async function main() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const employeeService = appContext.get<IEmployeeService>(TYPES.EmployeeService);

  const employee = await employeeService.getEmployee(12);
  console.log(JSON.stringify(employee, null, 2));

  await appContext.close();
}

void main();
