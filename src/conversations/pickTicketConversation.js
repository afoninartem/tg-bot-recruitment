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
exports.pickTicketConversation = void 0;
const ticketsKeyboard_1 = require("../keyboards/ticketsKeyboard");
const pickTestConversation_1 = require("./pickTestConversation");
function pickTicketConversation(conversation, ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, pickTestConversation_1.pickTestConversation)(conversation, ctx);
        let ticket = "0";
        if (result.test !== "Контролёр ОТК") {
            yield ctx.reply(`Тяните билет! ${String.fromCodePoint(0x1F642)}`, { reply_markup: ticketsKeyboard_1.ticketsKeyboard });
            const answer = yield conversation.wait();
            ticket = (_a = answer.message) === null || _a === void 0 ? void 0 : _a.text;
        }
        return Object.assign(result, { ticket });
    });
}
exports.pickTicketConversation = pickTicketConversation;
