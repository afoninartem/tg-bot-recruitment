import { Keyboard } from "grammy";

export const pickTestKeyboard = new Keyboard()
  .text("Контролёр ОТК").row()
  .text("Механик").row()
  .text("Электрик").oneTime()
