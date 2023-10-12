import Fixtures = require('node-mongodb-fixtures');

const fixtures = new Fixtures({
  dir: 'common/fixtures',
});

const runFixture = () => {
  fixtures
    .connect(process.env.MONGO_CONNECTION_STRING, {
      useUnifiedTopology: true,
    } as any)
    .then(() => fixtures.unload())
    .then(() => fixtures.load())
    .catch((e: any) => console.log(e))
    .finally(() => {
      console.log('Data Imported');
      fixtures.disconnect();
    });
};

export { runFixture };
