// 3rd

// Another payment working payment

import React, { useRef, useEffect, useState } from "react";

const PaypalPayment = () => {
  const paypal = useRef();
  const [transactionStatus, setTransactionStatus] = useState(null);

  useEffect(() => {
    window.paypal?.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "MacBook Laptop",
                amount: {
                  currency_code: "USD",
                  value: 10.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setTransactionStatus("success");
        },
        onError: (err) => {
          setTransactionStatus("failure");
        },
      })
      .render(paypal.current);
  }, []);

  if (transactionStatus === "success") {
    return alert("transaction success");
  }

  if (transactionStatus === "failure") {
    return alert("transfaction failed");
  }
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PaypalPayment;
