class CarPolymorph {
  private bodyType: string;
  private numberOfWheels: number;

  constructor(bodyType: string, numberOfWheels: number) {
    this.bodyType = bodyType;
    this.numberOfWheels = numberOfWheels;
  }

  showComplectation(): string {
    return `Car — Body: ${this.bodyType}, Wheels: ${this.numberOfWheels}`;
  }
}

class Porsche2 extends CarPolymorph {
  protected porsheModel: string;
  protected suspension: string;
  protected numberOfGears: number;

  constructor(bodyType: string, numberOfWheels: number) {
    super(bodyType, numberOfWheels);
    this.porsheModel = '911 Turbo';
    this.suspension = 'pneumatic';
    this.numberOfGears = 6;
  }

  showComplectation(): string {
    return `Porsche ${this.porsheModel} — Suspension: ${this.suspension}, Gears: ${this.numberOfGears}`;
  }
}

class Ford2 extends CarPolymorph {
  protected fordModel: string;
  protected valves: number;
  protected airConditioner: boolean;

  constructor(bodyType: string, numberOfWheels: number) {
    super(bodyType, numberOfWheels);
    this.fordModel = 'Mustang';
    this.valves = 16;
    this.airConditioner = true;
  }

  showComplectation(): string {
    return `Ford ${this.fordModel} — Valves: ${this.valves}, A/C: ${this.airConditioner}`;
  }
}

const fordMustangPoly = new Ford2('sedan', 4);
console.log(fordMustangPoly);

const porshee911Poly = new Porsche2('coupe', 8);
console.log(porshee911Poly);

const car = new CarPolymorph(bodyType: string, numberOfWheels: number) {
  
} 