const app = require('../index');

test('exports an Express application', () => {
  expect(app).toBeDefined();
  expect(typeof app.listen).toBe('function');
});
