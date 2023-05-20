const select_payment_method = (payment_method) => {
  switch (payment_method) {
    case "Bitcoin":
      return {
        payment_method: "Bitcoin",
        payment_qr_code: "css/images/btc.jpeg",
        payment_wallet: "bc1qm4jcff8q9wk4y6jqp4lf8n75azlmxyp6ha29z4",
      };
      break;

    case "Ethereum":
      return {
        payment_method: "Ethereum",
        payment_qr_code: "css/images/eth.jpeg",
        payment_wallet: "0xFbe3d5AD9878f61B818eb21D8cDFBa025b66c438",
      };
      break;

    case "USDT":
      return {
        payment_method: "USDT",
        payment_qr_code: "css/images/usdt.jpeg",
        payment_wallet: "TGR6pfF657SxgRZeUgk6KjDVSpJS2fmKw4",
      };
      break;

    // case "Paypal":
    //   return {
    //     payment_method: "Paypal",
    //     // payment_qr_code:
    //     //   "css/images/bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmy.png",
    //     payment_wallet: "bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmyPAYPAL",
    //   };
    //   break;

    // case "Perfect Money":
    //   return {
    //     payment_method: "Perfect Money",
    //     // payment_qr_code:
    //     //   "css/images/bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmy.png",
    //     payment_wallet: "bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmyPAYPAL",
    //   };
    //   break;

    default:
      return {
        payment_method: "Bitcoin",
        payment_qr_code: "css/images/btc.jpeg",
        payment_wallet: "bc1qm4jcff8q9wk4y6jqp4lf8n75azlmxyp6ha29z4",
      };
      break;
  }
};

module.exports = select_payment_method;
