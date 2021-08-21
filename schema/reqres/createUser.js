export default {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  required: ['name', 'job', 'id', 'createdAt'],
  properties: {
    name: {
      type: 'string',
    },
    job: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    createdAt: {
      type: 'string',
    },
  },
  additionalProperties: false,
};
