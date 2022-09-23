"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = exports.setEnd = exports.setStart = void 0;
let start, end;
const setStart = (data) => {
    start = data;
};
exports.setStart = setStart;
const setEnd = (data) => {
    end = data;
};
exports.setEnd = setEnd;
const getTime = () => {
    // console.log(`start: ${start}, end: ${end}, time: ${typeof end === "number" && typeof start === "number" ? end - start : null}`)
    return typeof end === "number" && typeof start === "number" ? end - start : null;
};
exports.getTime = getTime;
// module.exports = { setStart, setEnd, getTime }
