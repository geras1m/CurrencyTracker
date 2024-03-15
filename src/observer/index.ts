type FnType = (value: boolean) => void;

class Observable {
  observers: FnType[];

  constructor() {
    this.observers = [];
  }

  subscribe(func: FnType) {
    this.observers.push(func);
  }

  unsubscribe(func: FnType) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify() {
    this.observers.forEach((observer) => observer(true));
  }
}

export const observer = new Observable();
