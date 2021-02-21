"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const user_router_1 = require("./routers/user.router");
const token_guard_1 = require("./middlewares/token-guard");
const app = express();
const port = 4001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', user_router_1.userRouter);
// Unprotected Get
app.get('/some-resource', (req, res, next) => {
    res.json('Hello World');
});
app.use(token_guard_1.tokenGuard());
// Protected Get
app.get('/some-protected-resource', (req, res, next) => {
    res.json('Protected Hello World');
});
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map