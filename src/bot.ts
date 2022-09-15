import { Bot, Context, session, SessionFlavor } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
  conversations,
  createConversation,
} from "@grammyjs/conversations";
//keyboards ↓
// import { pickTestKeyboard } from "./keyboards/pickTestKeyboard"
// import { authKeyboard } from "./keyboards/authKeyboard"
// import { ticketsKeyboard } from "./keyboards/ticketsKeyboard"
//services ↓
// import { setTest, setPhone, clearResults } from "./services/testResults"
import { server } from "./server";

require('dotenv').config()


interface SessionData {
  phone: string | undefined,
  test: string,
  ticket: number,
  datetime: string,
  statistics: {
    question: number;
    answerisCorrect: boolean;
    time: string;
  }[],
}

type MyContext = Context & ConversationFlavor & SessionFlavor<SessionData>;
type MyConversation = Conversation<MyContext>;

const bot = new Bot<MyContext>(process.env.TOKEN as string);

function initial(): SessionData {
  return { phone: "", test: "", ticket: 0, datetime: "", statistics: [] };
}

bot.use(session({ initial }));
bot.use(conversations());



// Handle other messages.
import { mainConversation } from "./conversations/mainConversation"
bot.use(createConversation(mainConversation));

// export { bot };

// Handle the /start command.
bot.command("start", async (ctx) => {
  await ctx.reply("Бот отдела подбора персонала приветсвует Вас!")
  await ctx.conversation.enter("mainConversation")
});

server();
bot.start();