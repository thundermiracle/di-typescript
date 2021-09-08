import 'reflect-metadata';
import { TYPES } from 'common/bindings/types';
import { container } from './tsyringe.config';
import { IEmployeeService } from './services/EmployeeService';

const employeeService = container.resolve<IEmployeeService>(TYPES.EmployeeService);

async function main() {
  const employee = await employeeService.getEmployee(12);
  console.log(JSON.stringify(employee, null, 2));
}

void main();
