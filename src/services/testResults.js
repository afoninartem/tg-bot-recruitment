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
exports.setStatistics = exports.setDatetime = exports.setTicket = exports.setTest = exports.setPhone = exports.getResult = exports.clearResults = void 0;
let phone = "", test, ticket, datetime, statistics = [];
const clearResults = () => __awaiter(void 0, void 0, void 0, function* () {
    phone = "";
    test = "";
    ticket = "";
    datetime = "";
    statistics = [];
});
exports.clearResults = clearResults;
const getResult = () => __awaiter(void 0, void 0, void 0, function* () { return ({ phone, test, ticket, statistics, datetime }); });
exports.getResult = getResult;
const setPhone = (user_phone) => __awaiter(void 0, void 0, void 0, function* () { return phone = user_phone; });
exports.setPhone = setPhone;
const setTest = (user_test) => __awaiter(void 0, void 0, void 0, function* () { return test = user_test; });
exports.setTest = setTest;
const setTicket = (user_ticket) => __awaiter(void 0, void 0, void 0, function* () { return ticket = user_ticket; });
exports.setTicket = setTicket;
const setDatetime = (user_datetime) => __awaiter(void 0, void 0, void 0, function* () { return datetime = user_datetime; });
exports.setDatetime = setDatetime;
const setStatistics = (array) => __awaiter(void 0, void 0, void 0, function* () { return statistics = array; });
exports.setStatistics = setStatistics;
