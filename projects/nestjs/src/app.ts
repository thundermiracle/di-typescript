import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './nestjs.config';
import EmployeeService from './services/EmployeeService';

async function main() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const employeeService = appContext.get(EmployeeService);

  const employee = await employeeService.getEmployee(12);
  console.log(JSON.stringify(employee, null, 2));

  await appContext.close();
}

void main();
