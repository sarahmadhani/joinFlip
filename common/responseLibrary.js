export default {
  statusOk: 200,
  statusCreated: 201,
  statusNoContent: 204,
  statusBadRequest: 400,
  statusUnauthorized: 401,
  statusForbidden: 403,
  statusNotFound: 404,
  statusUnprocessableEntity: 422,
  statusInternalServerError: 500,
  statusTooManyRequest: 429,
};

export const responseHandle = (resp) => {
  const newResponse = {
    ...resp,
    body: Buffer.isBuffer(resp.body) ? JSON.parse(resp.body.toString()) : resp.body,
  };

  return newResponse;
};
