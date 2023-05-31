function blackScholes(callPutFlag, S, X, T, r, sigma) {
  // callPutFlag: "call" for call option, "put" for put option
  // S: current stock price
  // X: strike price
  // T: time to expiration (in years)
  // r: risk-free interest rate
  // sigma: volatility

  var d1 = (Math.log(S / X) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  var d2 = d1 - sigma * Math.sqrt(T);
  var Nd1 = cumulativeDistribution(d1);
  var Nd2 = cumulativeDistribution(d2);

  if (callPutFlag === "call") {
    var price = S * Nd1 - X * Math.exp(-r * T) * Nd2;
  } else if (callPutFlag === "put") {
    var price = X * Math.exp(-r * T) * (1 - Nd2) - S * (1 - Nd1);
  } else {
    return null;
  }

  return price.toFixed(2); // return the result rounded to 2 decimal places
}

function cumulativeDistribution(x) {
  // Approximation of the cumulative distribution function for the standard normal distribution
  var t = 1 / (1 + 0.2316419 * Math.abs(x));
  var d = 0.3989423 * Math.exp(-x * x / 2);
  var p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (x > 0) {
    p = 1 - p;
  }
  return p;
}

var callPrice = blackScholes("call", 100, 110, 1, 0.05, 0.2); // calculate the price of a call option
var putPrice = blackScholes("put", 100, 110, 1, 0.05, 0.2); // calculate the price of a put option
console.log("Call price:", callPrice);
console.log("Put price:", putPrice);

  
