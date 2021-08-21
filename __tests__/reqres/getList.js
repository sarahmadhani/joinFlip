import shell from 'shelljs';
import * as er from '../../common/expect-response';
import status from '../../common/responseLibrary';
import * as epEvent from '../../endpoints/reqres';
import * as schema from '../../schema/reqres/getList';

const { matchers } = require('jest-json-schema');
expect.extend(matchers);

let response;

describe('Positive Test - get list', () => {
  test('As user, i can get list users', async () => {
    response = await epEvent.endpointGetUsers(2);
    console.log(JSON.stringify(response.body));
    er.expectStatus(response, status.statusOk);
    er.expectSchema(response, schema.default);
    er.expectSnapshot(response, data.snapshotEx);
  });
});
