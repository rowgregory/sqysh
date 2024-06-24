import { NextResponse } from 'next/server.js'
import prisma from '../../../prisma/client.js'

export async function POST(request) {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get('endpoint');
    const { quote } = await request.json();

    if (query === 'REQUEST_A_QUOTE') {
      const createdQuote = await prisma.quote.create({
        data: {
          name: quote.name,
          companyName: quote.companyName,
          email: quote.email,
          phone: quote.phone,
          message: quote.message,
        },
      });

      return NextResponse.json({ id: createdQuote.id }, { status: 201 });
    } else {
      return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error requesting a quote', error }, { status: 500 });
  }
}




