// the interface segregation principle states that a class should not be forced to implement an interface that it does not use.
interface Animal {
   eat(): void;
   sleep(): void;
   move(): void;
   breathe(): void;
}

class Dog implements Animal {
   eat() {
      console.log('Dog is eating');
   }
   sleep() {
      console.log('Dog is sleeping');
   }
   move() {
      console.log('Dog is moving');
   }
   breathe() {
      console.log('Dog is breathing');
   }
}

class Bird implements Animal {
   eat() {
      console.log('Bird is eating');
   }
   sleep() {
      console.log('Bird is sleeping');
   }
   move() {
      // method to fly
      console.log('Bird is moving');
   }
   breathe() {
      console.log('Bird is breathing');
   }
}