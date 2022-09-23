"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authKeyboard = void 0;
const grammy_1 = require("grammy");
exports.authKeyboard = new grammy_1.Keyboard()
    .requestContact("Сообщить свой номер").row()
    .text("Не хочу сообщать свой номер");
