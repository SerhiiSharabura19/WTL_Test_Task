class Car {
  private bodyType: string;
  private numberOfWheels: number;

  constructor(bodyType: string, numberOfWheels: number) {
    this.numberOfWheels = 4;
    this.bodyType = 'sedan';
  }
}

class Porshee extends Car {
  private porsheModel: string;
  private suspension: string;
  private numberOfGears: number;

  constructor(bodyType: string, numberOfWheels: number) {
    super(bodyType, numberOfWheels);
    this.porsheModel = '911 turbo';
    this.suspension = 'pneumatic';
    this.numberOfGears = 6;
  }
}

class Ford extends Car {
  private fordModel: string;
  private valves: number;
  private airConditioner: boolean;

  constructor(bodyType: string, numberOfWheels: number) {
    super(bodyType, numberOfWheels);
    this.fordModel = 'Mustang';
    this.valves = 16;
    this.airConditioner = true;
  }
}

const fordMustang = new Ford('sedan', 4);
console.log(fordMustang);

const porshee911 = new Porshee('coupe', 8);
console.log(porshee911);
