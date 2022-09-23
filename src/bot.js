"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const conversations_1 = require("@grammyjs/conversations");
//keyboards ↓
// import { pickTestKeyboard } from "./keyboards/pickTestKeyboard"
// import { authKeyboard } from "./keyboards/authKeyboard"
// import { ticketsKeyboard } from "./keyboards/ticketsKeyboard"
//services ↓
// import { setTest, setPhone, clearResults } from "./services/testResults"
const server_1 = require("./server");
require('dotenv').config();
const bot = new grammy_1.Bot(process.env.TOKEN);
function initial() {
    return { phone: "", test: "", ticket: 0, datetime: "", statistics: [] };
}
bot.use((0, grammy_1.session)({ initial }));
bot.use((0, conversations_1.conversations)());
// Handle other messages.
const mainConversation_1 = require("./conversations/mainConversation");
bot.use((0, conversations_1.createConversation)(mainConversation_1.mainConversation));
// export { bot };
// Handle the /start command.
bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply("Бот отдела подбора персонала приветсвует Вас!");
    yield ctx.conversation.enter("mainConversation");
}));
(0, server_1.server)();
bot.start();
