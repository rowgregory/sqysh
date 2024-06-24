
import UIfx from "uifx";
const quoteReceivedURL2 = "/audio/quote-received-2.mp3";

async function createQuote(quote: any) {
  const received = new UIfx(quoteReceivedURL2);
  const response = await fetch("https://sqysh.vercel.app/api/quote?endpoint=REQUEST_A_QUOTE", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quote }),
  });
  if (response.ok) {
    received.play();
    return await response.json();
  } else {
    console.error("Quote creation failed");
  }
}

export default createQuote;
