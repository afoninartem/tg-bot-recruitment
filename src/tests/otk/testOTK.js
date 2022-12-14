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
exports.testingControllerOTK = void 0;
const grammy_1 = require("grammy");
const keyboard = require("../../keyboards/testKeyboard").default;
function testingControllerOTK(conversation, ctx) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const test = require("./test.json");
        let q = 1;
        let rightAnswers = 0;
        let qTime, aTime, laTime;
        const statistics = [];
        const userResult = [];
        while (test.questions[q]) {
            const answersKeyboard = keyboard(test.questions[q]);
            yield ctx.replyWithPhoto(new grammy_1.InputFile("./src/tests/otk/blueprint.webp"));
            yield ctx.reply(test.questions[q].question, { reply_markup: answersKeyboard });
            const answer = yield conversation.wait();
            qTime = q === 1 ? ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.date) || 0 : laTime || 0;
            aTime = ((_b = answer.message) === null || _b === void 0 ? void 0 : _b.date) || 0;
            laTime = aTime;
            const time = aTime - qTime;
            const isCorrect = ((_c = answer.message) === null || _c === void 0 ? void 0 : _c.text) === test.questions[q].correct;
            if (isCorrect)
                rightAnswers += 1;
            userResult.push({ question: q, answer: isCorrect ? String.fromCodePoint(0x2705) : String.fromCodePoint(0x274C), time: `${time} ??????`, isCorrect });
            statistics.push({ question: q, answerisCorrect: isCorrect, time: `${time} ??????` });
            q += 1;
        }
        // let result: string = `???????? ??????????????. ???????????????????? ??????????????: ${rightAnswers} ???? ${q - 1}.\n???????????????????? ??????????:`
        // userResult.forEach(item => result += `\n${item.question}: ${item.answer}, ${String.fromCodePoint(0x231B)}: ${item.time}`)
        const result = `???????? ??????????????, ?????????????? ???? ???????? ????????????. ???? ???????????????? ?? ???????? ?? ?????????????????? ??????????.`;
        yield ctx.reply(result);
        return statistics;
    });
}
exports.testingControllerOTK = testingControllerOTK;
