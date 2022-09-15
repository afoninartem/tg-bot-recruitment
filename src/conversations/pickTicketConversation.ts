import { Context } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";
import { ticketsKeyboard } from "../keyboards/ticketsKeyboard";
type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

import { pickTestConversation } from "./pickTestConversation";

export async function pickTicketConversation(conversation: MyConversation, ctx: MyContext) {
  const result = await pickTestConversation(conversation, ctx);
  let ticket = "0";
  if (result.test !== "Контролёр ОТК") {
    await ctx.reply(`Тяните билет! ${String.fromCodePoint(0x1F642)}`, { reply_markup: ticketsKeyboard })
    const answer = await conversation.wait();
    ticket = answer.message?.text as string;
  }
  return Object.assign(result, { ticket })
}

