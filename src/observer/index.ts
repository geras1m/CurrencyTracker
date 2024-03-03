type fnType = () => void;

class Observable {
  observers: fnType[];

  constructor() {
    this.observers = [];
  }

  subscribe(func: fnType) {
    this.observers.push(func);
  }

  unsubscribe(func: fnType) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify() {
    this.observers.forEach((observer) => observer());
  }
}

export const observer = new Observable();
