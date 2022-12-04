interface Contact<B, K> {
  phone: B;
  mail: K;
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

const contactList = new List<Contact<number, string>>();
contactList.add({phone: 1234, mail: 'mail1@domain'});
contactList.add({phone: 4321, mail: 'mail2@domain'});
contactList.add({phone: 5678, mail: 'mail3@domain'});

contactList.remove({phone: 4321, mail: 'mail2@domain'});

console.log(contactList.asArray());