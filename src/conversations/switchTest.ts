import { Context } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";
type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

import { pickTicketConversation } from "./pickTicketConversation";
import { testingControllerOTK } from "../tests/otk/testOTK";
import { testingPneumatics } from "../tests/pneumatics/test";
import { testingElectrical } from "../tests/electrical_engineering/test";



export async function switchTest(conversation: MyConversation, ctx: MyContext) {
  const info = await pickTicketConversation(conversation, ctx);
  let result: any[] = [];
  switch (info.test) {
    case "Контролёр ОТК":
      result = await testingControllerOTK(conversation, ctx);
      break;
    case "Механик":
      result = await testingPneumatics(conversation, ctx, info.ticket);
      break;
    case "Электрик":
      result = await testingElectrical(conversation, ctx, info.ticket);
      break;
  }
  return Object.assign(info, { statistics: result })
}
