import { Context } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";


type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

// import { bot } from "../bot"

import { authKeyboard } from "../keyboards/authKeyboard"

export async function authConversation(conversation: MyConversation, ctx: MyContext) {
  let result;
  do {
    await ctx.reply(`Для обработки результатов Вашего тестирования нам нужен Ваш телефонный номер`, { reply_markup: authKeyboard });
    const answer = await conversation.wait();
    // result = answer.message?.contact?.phone_number;
    result = {phone: answer.message?.contact?.phone_number, chat_id: answer.message?.chat.id}
  } while (!result)
  return result;
}