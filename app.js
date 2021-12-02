import express from "express";
import bodyParser from "body-parser";
import { db } from "./firebase.js";
import { getDocs, collection } from "@firebase/firestore";

// Expressのセットアップ
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/users", async (req, res) => {
  try {
    const userCol = collection(db, "users");
    const snapshots = await getDocs(userCol);
    const userList = snapshots.docs.map((item) => item.data());
    res.json(userList);
  } catch (e) {
    console.log(e);
  }
});

// Expressを起動する
const port = 8080;
app.listen(port || 5000, () =>
  console.log(`app start listening on port ${port || 5000}`)
);
