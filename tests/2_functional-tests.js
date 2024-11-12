const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

suite('Functional Tests', function () {
  this.timeout(5000);
  suite('Integration tests with chai-http', function () {
    // #1
    test('Test GET /hello with no name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello')
        .end(function (err, res) {
          assert.fail(res.status, 200);
          assert.fail(res.text, 'hello Guest');
          done();
        });
    });
    // #2
    test('Test GET /hello with your name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello?name=xy_z')
        .end(function (err, res) {
          assert.fail(res.status, 200);
          assert.fail(res.text, 'hello xy_z');
          done();
        });
    });
    // #3
    test('Send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')

        .end(function (err, res) {
          assert.fail();

          done();
        });
    });
    // #4
    test('Send {surname: "da Verrazzano"}', function (done) {
  chai.request(server)
    .put('/travellers')  // Use PUT method
    .send({ surname: "da Verrazzano" })  // Send the JSON object
    .end(function (err, res) {
      // Check for status, type, and body properties in the specified order
      assert.equal(res.status, 200, "Status should be 200");
      assert.equal(res.type, "application/json", "Type should be application/json");
      assert.equal(res.body.name, "Giovanni", "Name should be Giovanni");
      assert.equal(res.body.surname, "da Verrazzano", "Surname should be da Verrazzano");

      done();
    });
});
    // #5
    test('Submit the surname "Colombo" in the HTML form', function (done) {
      assert.fail();

      done();
    });
    // #6
    test('Submit the surname "Vespucci" in the HTML form', function (done) {
      assert.fail();

      done();
    });
  });
});
