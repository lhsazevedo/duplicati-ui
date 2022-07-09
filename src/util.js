import dayjs from 'dayjs'

export function parseDate (parseDate) {
  return dayjs(parseDate, "YYYYMMDDTHHmmssZ")
}
