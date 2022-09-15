import { Context, InputFile } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;


const keyboard = require("../../keyboards/testKeyboard").default;

export async function testingControllerOTK(conversation: MyConversation, ctx: MyContext) {
  const test = require("./test.json")
  let q = 1;
  let rightAnswers = 0;
  let qTime: number | undefined, aTime: number | undefined, laTime: number | undefined;
  const statistics = [];
  const userResult = [];
  while (test.questions[q]) {
    const answersKeyboard = keyboard(test.questions[q])
    await ctx.replyWithPhoto(new InputFile("./src/tests/otk/blueprint.webp"))
    await ctx.reply(test.questions[q].question, { reply_markup: answersKeyboard })
    const answer = await conversation.wait();
    qTime = q === 1 ? ctx.message?.date || 0 : laTime || 0;
    aTime = answer.message?.date || 0;
    laTime = aTime;
    const time = aTime - qTime;
    const isCorrect = answer.message?.text === test.questions[q].correct
    if (isCorrect) rightAnswers += 1
    userResult.push({ question: q, answer: isCorrect ? String.fromCodePoint(0x2705) : String.fromCodePoint(0x274C), time: `${time} сек`, isCorrect })
    statistics.push({ question: q, answerisCorrect: isCorrect, time: `${time} сек` })
    q += 1
  }
  // let result: string = `Тест окончен. Правильных ответов: ${rightAnswers} из ${q - 1}.\nРезультаты теста:`
  // userResult.forEach(item => result += `\n${item.question}: ${item.answer}, ${String.fromCodePoint(0x231B)}: ${item.time}`)
  const result = `Тест окончен, спасибо за Ваши ответы. Мы свяжемся с Вами в ближайшее время.`
  await ctx.reply(result)
  return statistics;
}

