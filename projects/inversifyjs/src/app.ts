import 'reflect-metadata';
import { TYPES } from 'common/bindings/types';
import { container } from './inversify.config';
import { IEmployeeService } from './services/EmployeeService';

const employeeService = container.get<IEmployeeService>(TYPES.EmployeeService);

async function main() {
  const employee = await employeeService.getEmployee(13);
  console.log(JSON.stringify(employee, null, 2));
}

void main();
