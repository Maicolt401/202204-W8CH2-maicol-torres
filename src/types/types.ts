type RobotType = "cleaner" | "waiter" | "developer";

interface Irobot {
  name: string;
  type: string;
  battery: number;
  work: () => void;
  reset: () => void;
}

class Robot implements Irobot {
  battery;

  constructor(
    public name: string,
    public type: RobotType,
    private message: string
  ) {
    this.battery = 100;
  }

  work() {
    console.log(this.message);
  }

  reset() {}
}

export default Robot;
