'use strict';

function save(args: T): T {
  return args;
}

save({name: 'Daniel', age: 32});
save({phone: '5551900000000', mail: 'mail@domain.com'});
save({postalCode: '90000000', city: 'City Name'});

interface Contact<B, K> {
  phone: B;
  mail: K;
}

save<Contact<number, string>>({
  phone: 5551900000000,
  mail: 'mail@domain.com',
});