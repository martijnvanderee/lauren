// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default defineEventHandler(async (event) => {
  // Create a PaymentIntent on Stripe
  // A PaymentIntent represents your customer's intent to pay
  // and needs to be confirmed on the client to finalize the payment

  console.log("test", process.env.STRIPE_SECRET_KEY);
  // const paymentIntent = await stripe.paymentIntents.create({
  //   currency: "usd",
  //   amount: 5,
  //   description: "Order from store",
  // });

  // const headers = {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers": "Content-Type",
  // };

  // return {
  //   statusCode: 200,
  //   headers,
  //   body: JSON.stringify({
  //     clientSecret: paymentIntent.client_secret,
  //   }),
  // };

  return {
    hello: process.env.STRIPE_SECRET_KEY,
  };
});
