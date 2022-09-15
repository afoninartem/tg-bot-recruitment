import { Keyboard } from "grammy";

const keyboard = (unit: any) => {
  const keyboardLength = Object.keys(unit).filter(key => key.includes("answer")).length;
  const keyboard = keyboardLength === 4 ? new Keyboard().text(unit.answer_1).row().text(unit.answer_2).row().text(unit.answer_3).row().text(unit.answer_4) : keyboardLength === 3 ? new Keyboard().text(unit.answer_1).row().text(unit.answer_2).row().text(unit.answer_3) : keyboardLength === 2 ? new Keyboard().text(unit.answer_1).row().text(unit.answer_2) : new Keyboard().text(unit.answer_1)
  return keyboard.oneTime()
}

export default keyboard