import shell from 'shelljs';
import * as er from '../../common/expect-response';
import status from '../../common/responseLibrary';
import * as epEvent from '../../endpoints/reqres';
import * as schema from '../../schema/reqres/createUser';
import * as data from '../../data/reqres/createUser';

const { matchers } = require('jest-json-schema');
expect.extend(matchers);

let response;

describe('Positive Test - Create User', () => {
  test('As user, i can create user', async () => {
    response = await epEvent.endpointCreateUser(data.data);
    console.log(JSON.stringify(response.body));
    er.expectStatus(response, status.statusCreated);
    er.expectToMatchObject(response, response.body, data.data);
    er.expectSchema(response, schema.default);
  });
});
