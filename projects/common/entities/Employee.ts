import Project from './Project';

export default class Employee {
  constructor(
    private _id: number,
    private _name: string,
    private _sex: string,
    private _age: number,
    private _project: Project,
  ) {}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get sex(): string {
    return this._sex;
  }

  public set sex(value: string) {
    this._sex = value;
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get project(): Project {
    return this._project;
  }
  public set project(value: Project) {
    this._project = value;
  }
}
