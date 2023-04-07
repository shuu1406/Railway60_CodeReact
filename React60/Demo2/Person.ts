class Person {
  private id: number;
  private name: string;
  private address: string;
constructor(id: number, name: string, address: string){
    this.id = id;
    this.name = name;
    this.address = address;
}

public setId(id:number){
    this.id = id;
} 
public getId():number {
    return this.id;
} 
public setName(name:string){
    this.name = name;
} 
public getName():string {
    return this.name;
} 
public setAddress(address:string){
    this.address = address;
} 
public getAddress():string {
    return this.address;
} 
    public showInformation(){
        console.log("ID:" + this.id);
        console.log("Name:" + this.name);
        
    }
}
export{Person}; 
// var person1 = new Person;

 