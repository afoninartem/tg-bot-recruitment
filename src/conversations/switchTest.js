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
exports.switchTest = void 0;
const pickTicketConversation_1 = require("./pickTicketConversation");
const testOTK_1 = require("../tests/otk/testOTK");
const test_1 = require("../tests/pneumatics/test");
const test_2 = require("../tests/electrical_engineering/test");
function switchTest(conversation, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const info = yield (0, pickTicketConversation_1.pickTicketConversation)(conversation, ctx);
        let result = [];
        switch (info.test) {
            case "Контролёр ОТК":
                result = yield (0, testOTK_1.testingControllerOTK)(conversation, ctx);
                break;
            case "Механик":
                result = yield (0, test_1.testingPneumatics)(conversation, ctx, info.ticket);
                break;
            case "Электрик":
                result = yield (0, test_2.testingElectrical)(conversation, ctx, info.ticket);
                break;
        }
        return Object.assign(info, { statistics: result });
    });
}
exports.switchTest = switchTest;
