import { Context } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

import { switchTest } from "./switchTest";
import { setResultInDB } from "../services/dbHandler"

export async function mainConversation(conversation: MyConversation, ctx: MyContext) {
  const result = await switchTest(conversation, ctx);
  const datetime = new Date().toLocaleString();
  const finalResult = Object.assign(result, { datetime })
  // console.log(finalResult)
  setResultInDB(finalResult)

}
