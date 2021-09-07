import 'reflect-metadata';
import './typedi.config';
import { Container } from 'typedi';
import EmployeeService from './services/EmployeeService';

const employeeService = Container.get(EmployeeService);

async function main() {
  const employee = await employeeService.getEmployee(12);
  console.log(JSON.stringify(employee, null, 2));
}

void main();
