let start: number | undefined, end: number | undefined;

export const setStart = (data: number | undefined) => {
  start = data
}

export const setEnd = (data: number | undefined) => {
  end = data
}

export const getTime = () => {
  // console.log(`start: ${start}, end: ${end}, time: ${typeof end === "number" && typeof start === "number" ? end - start : null}`)
  return typeof end === "number" && typeof start === "number" ? end - start : null
}

// module.exports = { setStart, setEnd, getTime }