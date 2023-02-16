module.exports = () => {
  let { faker } = require('@faker-js/faker/locale/es_MX');

  /** data faker quantities */
  let usersQuantity = 10;

  /** database */
  let database = {
    users: [],
  };

  /** users */
  for (let i = 0; i < usersQuantity; i++) {
    let name = faker.name.firstName();
    let lastName = faker.name.lastName();
    let fullName = name + ' ' + lastName;
    database.users.push({
      id: faker.random.numeric(10),
      name: fullName,
      email: faker.internet.email(name, lastName).toLowerCase(),
      password: faker.internet.password(),
      role: faker.helpers.arrayElement(['ADMIN', 'USER']),
      created: faker.date.past().getTime(),
      modified: faker.date.past().getTime(),
    });
  }

  return database;
};
