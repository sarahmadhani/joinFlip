/* eslint-disable radix */
const chai = require('chai');

const expectChai = chai.expect;
chai.use(require('chai-sorted'));

export const output = response => ({
  text: `\n  Request: ${JSON.stringify(response.request, null, 4)} \n  Response: ${JSON.stringify(response.text)}`,
});

export const expectStatus = (response, expectedStatus) => {
  expect((response).status, `Reason: Wrong HTTP Status Code ${output(response).text}`).toEqual(expectedStatus);
};

export const expectBody = (response, resp, expectedBody) => {
  expect(resp, `Reason: Expect and Actual is not Equal ${JSON.stringify(response.text, null, 4)}`).toEqual(expectedBody);
};

export const expectStatusError = (response, resp, expectedStatus) => {
  expect(resp, `Reason: Wrong HTTP Status Code ${JSON.stringify(response, null, 4)}`).toBe(expectedStatus);
};

export const expectErrorStatus = (response, expectedStatus) => {
  const respObj = JSON.parse(response.text);
  if (respObj.errors === undefined) {
    expect(response.status, `Reason: Wrong HTTP Status Code ${output(response).text}`).toEqual(expectedStatus);
  } else {
    expect(respObj.errors[0].httpStatusCode, `Reason: Wrong HTTP Status Code ${output(response).text}`).toEqual(expectedStatus);
  }
};

export const expectEqual = (response, actualData, expectedBody) => {
  expect(actualData, `Reason: Actual Data is not equal with Expected Data ${output(response).text}`).toEqual(expectedBody);
};

export const expectContain = (response, actualData, expectedBody) => {
  expect(actualData, `Reason: Actual Data is not contain with Expected Data ${output(response).text}`).toContain(expectedBody);
};

export const expectToMatchObject = (response, actualData, expectedBody) => {
  expect(actualData, `Reason: Actual Data is not to match obaject with Expected Data ${output(response).text}`).toMatchObject(expectedBody);
};

export const expectSchema = (response, expectedSchema) => {
  expect((response).body, `Reason: Wrong Response Schema ${output(response).text}`).toMatchSchema(expectedSchema);
};

export const expectSchemaSpec = (response, responseSpec, expectedSchema) => {
  expect(responseSpec, `Reason: Wrong Response Schema ${output(response).text}`).toMatchSchema(expectedSchema);
};

export const expectErrRespSchema = (response, expectedSchema) => {
  expect((response).text, `Reason: Wrong Response Schema ${output(response).text}`).toMatchSchema(expectedSchema);
};

export const expectSnapshot = (response) => {
  expect((response).text, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot();
};

export const expectSnapEx = (response, snapshotExcept) => {
  expect((response).text, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot(snapshotExcept);
};

export const expectSnapshotSpec = (response, actualData) => {
  expect(actualData, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot();
};

export const expectSnapExSpec = (response, actualData, snapshotExcept) => {
  expect(actualData, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot(snapshotExcept);
};

export const expectDateIsAfter = (response, respDate, expDate) => {
  const expectDate = Date.parse(expDate);
  const responseDate = Date.parse(respDate);
  expect(responseDate, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toBeGreaterThanOrEqual(expectDate);
};

export const expectDateIsBefore = (response, respDate, expDate) => {
  const expectDate = Date.parse(expDate);
  const responseDate = Date.parse(respDate);
  expect(responseDate, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toBeLessThanOrEqual(expectDate);
};

export const expectAscending = (response, actualData) => {
  expectChai(actualData, `Reason: Response must be sorted Ascending ${output(response).text}`).to.be.sorted({ descending: false });
};

export const expectDescending = (response, actualData) => {
  expectChai(actualData, `Reason: Response mush be sorted Descending ${output(response).text}`).to.be.sorted({ descending: true });
};

export const expectLength = (response, actualData, length) => {
  expectChai(actualData, `Reason: Actual Length is not Equal with Expected Length ${output(response).text}`).to.have.lengthOf(length);
};

export const expectLengthWithin = (response, actualData, minLength, maxLength) => {
  expectChai(actualData, `Reason: Actual Length is not Equal between Expected Length ${output(response).text}`).to.have.lengthOf.within(minLength, maxLength);
};

export const expectWithin = (response, actualData, min, max) => {
  expectChai(actualData, `Reason: Actual Number is not Equal between Expected Number ${output(response).text}`).to.be.within(min, max);
};

export const expectGreaterThanOrEqual = (response, actualData, number) => {
  expect(actualData, `Reason: Actual Number is not Greater than or Equal with Expected Number ${output(response).text}`).toBeGreaterThanOrEqual(number);
};

export const expectObjectFillter = (response, actualData, expectData) => {
  expectChai(actualData, `Reason: Actual Data is not Contain or Equal with Expected Data ${output(response).text}`).to.contain.members(expectData);
};


export const expectLessThanOrEqual = (response, actualData, number) => {
  expect(actualData, `Reason: Actual Number is not Less than or Equal with Expected Number ${output(response).text}`).toBeLessThanOrEqual(number);
};

export const expectNotEqual = (response, actualData, expectedBody) => {
  expect(actualData, `Reason: Actual Data should not equal with Expected Data ${output(response).text}`).not.toEqual(expectedBody);
};

export const expectNotContain = (response, actualData, expectedBody) => {
  expect(actualData, `Reason: Actual Data is not contain with Expected Data ${output(response).text}`).not.toContain(expectedBody);
};

export const expectASCBy = (response, ascendingBy) => {
  expectChai((response), `Reason: Response mush be sorted Descending ${output(response).text}`).to.be.sortedBy(`${ascendingBy}`, { ascending: true });
};
export const expectDESCBy = (response, descendingBy) => {
  expectChai((response), `Reason: Response mush be sorted Descending ${output(response).text}`).to.be.sortedBy(`${descendingBy}`, { descending: true });
};

export const expectEmpty = (response, actualData) => {
  expectChai((actualData), `Reason: Response mush be sorted Descending ${output(response).text}`).to.be.empty;
};
