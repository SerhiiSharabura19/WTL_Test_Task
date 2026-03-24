abstract class Animal {
  constructor(protected name: string) {}

  abstract makeSound(): string;
  abstract toGo(): string;

  describe(): void {
    console.log(`${this.name} say: ${this.makeSound()}`);
  }
}

class Dog extends Animal {
  makeSound(): string {
    return 'Bark';
  }
  toGo(): string {
    return 'Bark';
  }
}

class Cat extends Animal {
  makeSound(): string {
    return 'Meaw';
  }
}

class Duck extends Animal {
  makeSound(): string {
    return 'Ga';
  }
}

const animals: Animal[] = [new Dog('Racks'), new Cat('Fluffy'), new Duck('Edgar')];

animals.forEach((animal) => animal.describe());
