"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickTestKeyboard = void 0;
const grammy_1 = require("grammy");
exports.pickTestKeyboard = new grammy_1.Keyboard()
    .text("Контролёр ОТК").row()
    .text("Механик").row()
    .text("Электрик").oneTime();
