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
exports.mainConversation = void 0;
const switchTest_1 = require("./switchTest");
const dbHandler_1 = require("../services/dbHandler");
function mainConversation(conversation, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, switchTest_1.switchTest)(conversation, ctx);
        const datetime = new Date().toLocaleString();
        const finalResult = Object.assign(result, { datetime });
        // console.log(finalResult)
        (0, dbHandler_1.setResultInDB)(finalResult);
    });
}
exports.mainConversation = mainConversation;
