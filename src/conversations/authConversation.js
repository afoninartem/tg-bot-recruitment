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
exports.authConversation = void 0;
// import { bot } from "../bot"
const authKeyboard_1 = require("../keyboards/authKeyboard");
function authConversation(conversation, ctx) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        do {
            yield ctx.reply(`Для обработки результатов Вашего тестирования нам нужен Ваш телефонный номер`, { reply_markup: authKeyboard_1.authKeyboard });
            const answer = yield conversation.wait();
            // result = answer.message?.contact?.phone_number;
            result = { phone: (_b = (_a = answer.message) === null || _a === void 0 ? void 0 : _a.contact) === null || _b === void 0 ? void 0 : _b.phone_number, chat_id: (_c = answer.message) === null || _c === void 0 ? void 0 : _c.chat.id };
        } while (!result);
        return result;
    });
}
exports.authConversation = authConversation;
