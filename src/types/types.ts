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
  }

  reset() {}

  work() {
    console.log(this.message);
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
