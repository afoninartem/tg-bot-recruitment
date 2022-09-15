let phone: string | undefined = "", test: string, ticket: string | undefined, datetime: string, statistics: {
  question: number;
  answerisCorrect: boolean;
  time: string;
}[] = []
export const clearResults = async () => {
  phone = "";
  test = "";
  ticket = "";
  datetime = "";
  statistics = [];
}
export const getResult = async () => ({ phone, test, ticket, statistics, datetime })
export const setPhone = async (user_phone: string | undefined) => phone = user_phone
export const setTest = async (user_test: string) => test = user_test;
export const setTicket = async (user_ticket: string) => ticket = user_ticket;
export const setDatetime = async (user_datetime: string) => datetime = user_datetime
export const setStatistics = async (array: {
  question: number;
  answerisCorrect: boolean;
  time: string;
}[]) => statistics = array
