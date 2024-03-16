import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const PaypalPayment2 = () => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase: [
              {
                decription: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: 650,
                },
              },
            ],
          });
        },
        onApproval: async (data, actions) => {
          const order = await actions.order.capture();
        },
        onError: (err) => {
        },
      })
      .render(paypal.current);
  }, []);

  return <div ref={paypal}></div>;
};

export default PaypalPayment2;
