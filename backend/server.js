require("dotenv").config();
const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

let cart = {}; // A simple in-memory cart variable

app.post("/checkout", async (req, res) => {
  try {
    const items = req.body.items;
    if (!Array.isArray(items)) {
      throw new Error("Invalid items data");
    }

    // Process the items array as needed

    const lineItems = items.map((item) => ({
      price: item.id,
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5174/success", // Redirect to the server's success endpoint
      cancel_url: "http://localhost:5174/cancel",
    });

    // Save the cart items to the in-memory cart variable
    cart = items;

    res.send(JSON.stringify({ url: session.url }));
  } catch (error) {
    console.error("Error in /checkout:", error);
    res.status(400).json({ error: "Bad Request" });
  }
});

app.get("/success", (req, res) => {
  // Clear the cart after successful payment
  cart = {};

  // Redirect to the success page on your website
  res.redirect("http://localhost:5174/success");
});

app.get("/cancel", (req, res) => {
  // Clear the cart if the payment is canceled
  cart = {};

  // Redirect to the cancel page on your website
  res.redirect("http://localhost:5174/cancel");
});

app.listen(5000, () => console.log("Listening on port 5000!"));