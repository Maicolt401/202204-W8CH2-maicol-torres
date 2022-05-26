import { match } from "assert";
import { arrayBuffer } from "stream/consumers";

type RobotType = "cleaner" | "waiter" | "developer";

interface Irobot {
  name: string;
  battery: number;
  reset: () => void;
  type: string;
  work: () => void;
}

class Robot implements Irobot {
  battery;

  constructor(
    public name: string,
    public type: RobotType,
    protected message: string
  ) {
    this.battery = 100;
    this.name = this.generateName();
  }

  reset() {}

  work() {
    console.log(this.message);
  }
  generateName(): string {
    let name: string = "";

    const chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 4; i++) {
      if (i !== 3) {
        name += chars.charAt(Math.floor(Math.random() * chars.length));
        continue;
      }
      name += Math.floor(Math.random() * (99 - 10) + 10);
    }

    return name;
  }
}

export class Cleaner extends Robot {
  constructor(public name: string) {
    super(name, "cleaner", "blabal I clean");
  }
}

export class Waiter extends Robot {
  constructor(public name: string) {
    super(name, "cleaner", "blabal I clean");
  }
}

export class Dveloper extends Robot {
  constructor(public name: string) {
    super(name, "developer", "blabal I developer");
  }
}
