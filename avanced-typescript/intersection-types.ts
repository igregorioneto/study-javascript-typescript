interface Person {
  name: string;
  age: number;
}

interface Contact {
  phone: string;
  mail: string;
}

interface Address {
  city: string;
}

type Customer = Person & Contact & Address;

function saveCustomer(customer: Customer) {
  return customer;
}