import { Keyboard } from "grammy";

export const authKeyboard = new Keyboard()
  .requestContact("Сообщить свой номер").row()
  .text("Не хочу сообщать свой номер")