import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('America/Tijuana')

export const date = (...params: Parameters<typeof dayjs>) =>
  dayjs(...params).tz(dayjs.tz.guess())
