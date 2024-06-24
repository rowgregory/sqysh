import { createRequest, createResponse } from 'node-mocks-http'
import prisma from '../prisma/client.js'

const handler = async (request, response) => {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get('endpoint');
    const { name, companyName, email, phone, message } = await request.body.data

    if (query === 'REQUEST_A_QUOTE') {
      const createdQuote = await prisma.quote.create({
        data: {
          name,
          companyName,
          email,
          phone,
          message,
        },
      });

      return response.json({ id: createdQuote.id }, { status: 201 });
    } else {
      return response.json({ message: 'Invalid endpoint' }, { status: 400 });
    }
  } catch (error) {
    return response.json({ message: 'Error requesting a quote', error }, { status: 500 });
  }
}

jest.mock('../prisma/client.js', () => ({
  quote: {
    create: jest.fn(data => ({ id: 1, ...data })),
  },
}));

describe('Creates a quote', () => {
  test('creates a new quote', async () => {
    const req = createRequest({
      method: 'POST',
      url: 'http://localhost/api/quote?endpoint=REQUEST_A_QUOTE',
      body: {
        data: {
          name: 'John Doe',
          companyName: 'Example Inc.',
          email: 'john.doe@example.com',
          phone: '1234567890',
          message: 'Test message'
        }
      }
    })

    const res = createResponse()


    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ id: 1 });
  })
})
