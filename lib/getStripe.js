import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

// stripe 로딩 비동기 함수

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
};

export default getStripe;
