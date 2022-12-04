interface Address {
  postalCode: string | number;
  city: string;
}

function saveAddress(address: Address) {
  return address;
}