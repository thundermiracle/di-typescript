export default class Project {
  constructor(
    private _id: string,
    private _name: string,
    private _period: string,
  ) {}

  public get period(): string {
    return this._period;
  }
  public set period(value: string) {
    this._period = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
}
