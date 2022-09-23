"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketsKeyboard = void 0;
const grammy_1 = require("grammy");
exports.ticketsKeyboard = new grammy_1.Keyboard().text("1").text("2").text("3").text("4").text("5").row().text("6").text("7").text("8").text("9").text("10").oneTime();
