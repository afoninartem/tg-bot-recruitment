"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const keyboard = (unit) => {
    const keyboardLength = Object.keys(unit).filter(key => key.includes("answer")).length;
    const keyboard = keyboardLength === 4 ? new grammy_1.Keyboard().text(unit.answer_1).row().text(unit.answer_2).row().text(unit.answer_3).row().text(unit.answer_4) : keyboardLength === 3 ? new grammy_1.Keyboard().text(unit.answer_1).row().text(unit.answer_2).row().text(unit.answer_3) : keyboardLength === 2 ? new grammy_1.Keyboard().text(unit.answer_1).row().text(unit.answer_2) : new grammy_1.Keyboard().text(unit.answer_1);
    return keyboard.oneTime();
};
exports.default = keyboard;
