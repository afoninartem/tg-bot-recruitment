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
exports.testingElectrical = void 0;
const grammy_1 = require("grammy");
const keyboard = require("../../keyboards/testKeyboard").default;
function testingElectrical(conversation, ctx, ticket) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const test = require(`./tickets/ticket_${ticket}/test.json`).questions;
        let q = 1;
        let rightAnswers = 0;
        let qTime, aTime, laTime;
        const statistics = [];
        const userResult = [];
        while (test[q]) {
            const answersKeyboard = keyboard(test[q]);
            test[q].question
                ? yield ctx.reply(test[q].question, { reply_markup: answersKeyboard })
                : (yield ctx.replyWithPhoto(new grammy_1.InputFile(`./src/tests/electrical_engineering/tickets/ticket_${ticket}/img/img_${q}.png`)),
                    yield ctx.reply("Что изображено на картинке?", { reply_markup: answersKeyboard }));
            const answer = yield conversation.wait();
            qTime = q === 1 ? ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.date) || 0 : laTime || 0;
            aTime = ((_b = answer.message) === null || _b === void 0 ? void 0 : _b.date) || 0;
            laTime = aTime;
            const time = aTime - qTime;
            const isCorrect = ((_c = answer.message) === null || _c === void 0 ? void 0 : _c.text) === test[q].correct;
            if (isCorrect)
                rightAnswers += 1;
            userResult.push({ question: q, answer: isCorrect ? String.fromCodePoint(0x2705) : String.fromCodePoint(0x274C), time: `${time} сек`, isCorrect });
            statistics.push({ question: q, answerisCorrect: isCorrect, time: `${time} сек` });
            q += 1;
        }
        // let result: string = `Тест окончен. Правильных ответов: ${rightAnswers} из ${q - 1}.\nРезультаты теста:`
        // userResult.forEach(item => result += `\n${item.question}: ${item.answer}, ${String.fromCodePoint(0x231B)}: ${item.time}`)
        const result = `Тест окончен, спасибо за Ваши ответы. Мы свяжемся с Вами в ближайшее время.`;
        yield ctx.reply(result);
        return statistics;
    });
}
exports.testingElectrical = testingElectrical;
