const mongoose = require("mongoose");
require("dotenv").config(); // ✅ Load .env variables

const db = process.env.MONGO_URI; // ✅ Read URI from .env

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connection to MongoDB successful");
})
.catch((e) => {
  console.error("❌ No connection:", e.message);
});
