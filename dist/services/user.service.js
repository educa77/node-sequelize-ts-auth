"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user_1 = require("../models/user");
class UserService {
    constructor() {
        this._saltRounds = 12;
        this._jwtSecret = "0.rfyj3n9nzh";
    }
    static get userAttributes() {
        return ["id", "email"];
    }
    static get user() {
        return UserService._user;
    }
    register({ email, password }) {
        return bcrypt.hash(password, this._saltRounds).then((hash) => {
            return user_1.User.create({ email, password: hash }).then((u) => this.getUserById(u.id));
        });
    }
    login({ email }) {
        return user_1.User.findOne({ where: { email } }).then((u) => {
            const { id, email } = u;
            return { token: jwt.sign({ id, email }, this._jwtSecret) };
        });
    }
    verifyToken(token) {
        console.log('entra a token');
        return new Promise((resolve, reject) => {
            jwt.verify(token, this._jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false);
                    return;
                }
                UserService._user = user_1.User.findByPk(decoded["id"]);
                resolve(true);
                return;
            });
        });
    }
    getUserById(id) {
        console.log('entra');
        return user_1.User.findByPk(id).then(() => {
            attributes: UserService.userAttributes;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map