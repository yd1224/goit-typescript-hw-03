interface IKey{
    getSignature(): number;
}
class Key implements IKey{
    private signature: number; 
    constructor() {
        this.signature= Math.random();
    }
    getSignature() {
        return this.signature;
    }
}

interface IPerson{
     getKey(): Key;
}
class Person implements IPerson{
    constructor(private key: Key) { };
    getKey() {
        console.log("Person got key", this.key);
        return this.key;
    }
}

abstract class House{
    tenants:Person[] =[];
  door: boolean;
    key: Key;
    comeIn(person: Person) {
        if (this.door) {
            console.log("Person come in");
            
          this.tenants.push(person);
          console.log("tenants:",this.tenants);
        }
    }
   abstract openDoor(key: Key): void;
}
class MyHouse extends House{
      key: Key;
  constructor(key: Key) {
    super();
    this.key = key;
    }
  openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            console.log("Opened door");
            this.door = true;
    }
}
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);



export {};