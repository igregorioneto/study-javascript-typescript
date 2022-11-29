// RUIM
const isPayMethod = (method) => {
  if (
    method === 'cash' ||
    method === 'debit card' ||
    method === 'credit cart'
  ) {
    return true;
  }
  return false;
}

//BOM
const typePayMethod = ['cash', 'debit card', 'credit card'];
const payMethod = (method) => typePayMethod.includes(method);