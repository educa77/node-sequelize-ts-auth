"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Sequelize = require("sequelize");
const sequelize_1 = require("../instances/sequelize");
exports.User = sequelize_1.sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
});
//# sourceMappingURL=user.js.map