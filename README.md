# Black-Shoals-Model

This project provides an implementation of the Black-Scholes model using Google App Script. The Black-Scholes model, also known as the Black-Scholes-Merton model, is a mathematical model used to estimate the fair price or theoretical value for a European-style option. 

The model is widely used in finance to determine the price of options, which are financial derivatives that give the holder the right, but not the obligation, to buy (in the case of a call option) or sell (in the case of a put option) an underlying asset at a specified price (known as the strike price) within a specified period of time.

<h3> Usage </h3>

To use the Black-Scholes model, you can follow these steps:

1. Clone the repository or download the source code.
2. Include the black-scholes.js file in your HTML file or import it into your JavaScript project.
3. Call the blackScholes function with the appropriate parameters to calculate the option price. Ensure that you replace the example inputs (S, X, T, r, and sigma) with the actual values relevant to the option you want to price.

<h3> Function Parameters </h3>

The blackScholes function takes the following parameters:

- callPutFlag: A string indicating the type of option. Use "call" for a call option and "put" for a put option.
- S: The current stock price.
- X: The strike price.
- T: The time to expiration in years.
- r: The risk-free interest rate.
- sigma: The volatility.
