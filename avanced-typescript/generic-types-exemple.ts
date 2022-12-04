interface Contact {
  phone: string;
  mail: string;
}

class List<T> {
  private data: T[];

  constructor(...itens: T[]) {
    this.data = itens;
  }

  add(item: T) {
    this.data.push(item);
  }

  remove(item: T) {
    const index = this.data.indexOf(item);
    index > -1 && this.data.splice(index, 1);
  }

  asArray(): T[] {
    return this.data;
  }
}