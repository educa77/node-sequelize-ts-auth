"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const db = 'expressapp';
const username = 'edu';
const password = 'Ami16_Azu04%';
exports.sequelize = new sequelize_1.Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});
exports.sequelize.authenticate();
//# sourceMappingURL=sequelize.js.map