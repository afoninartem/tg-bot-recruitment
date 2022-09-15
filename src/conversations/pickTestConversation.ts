import { Context } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";


type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

import { authConversation } from "./authConversation";

import { pickTestKeyboard } from "../keyboards/pickTestKeyboard";

export async function pickTestConversation(conversation: MyConversation, ctx: MyContext) {
  const {phone, chat_id } = await authConversation(conversation, ctx);
  await ctx.reply(`Выберите тест`, { reply_markup: pickTestKeyboard })
  const answer = await conversation.wait();
  return { phone, chat_id, test: answer.message?.text }
}