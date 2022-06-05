export default class Client{
  private _id: string;
  private _name: string;
  private _age: number;

  constructor(name: string, age: number, id: string = ""){
    this._name = name;
    this._age = age;
    this._id = id
  }

  static empty(): Client{
    return new Client('', 0);
  }
  get id(){
    return this._id;
  }
  set id(value: string){
    this._id = value;
  }
  get name(){
    return this._name;
  }
  get age(){
    return this._age
  }
}