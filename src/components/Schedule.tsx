import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import Calendar from './public/Calendar'
import SectionTitle from './public/SectionTitle'

const Wrapper = styled(motion.div)`
  padding-top: 40px;
`

const Date = styled.div`
  color: #e0e0e0;

  margin-bottom: 10px;
`

const Description = styled.div`
  color: white;
  line-height: 24px;
`

const Schedule = () => {
  const targetDateStr = '2025-11-23'
  const dday = dayjs(targetDateStr).diff(dayjs(), 'days')
  const getCountWeekdaysUntil = (targetWeekDay: number) => {
    const today = dayjs()
    const targetDate = dayjs(targetDateStr)

    let count = 0
    let current = today

    while (current.isBefore(targetDate) || current.isSame(targetDate, 'day')) {
      if (current.day() === targetWeekDay) {
        count++
      }
      current = current.add(1, 'day')
    }

    return count
  }
  const getCountWithTimes = ({
    hours,
    minutes,
  }: {
    hours: number
    minutes: number
  }) => {
    const now = dayjs()
    const untilDate = dayjs(targetDateStr)

    const remainingMinutes = untilDate.diff(now, 'minute')

    const roundTripMinutes = (hours * 60 + minutes) * 2

    return (remainingMinutes / roundTripMinutes).toFixed(1)
  }

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionTitle>Save The Date</SectionTitle>
      <Calendar />
      <Date>2025.11.22 SAT 1PM</Date>
      <Date>D - {dday}</Date>
      <Description>
        가연이와 상현이가 다이어트 결심을 {dday}번 할 동안
        <br />
        상현이가 좋아하는 웹툰 &apos;상남자&apos;가 {getCountWeekdaysUntil(5)}회
        더 연재될 동안
        <br />
        차코가 춘치원을 {getCountWeekdaysUntil(1)}번 더 다녀올 동안
        <br />
        가연이 본가인 서울시 강북구 수유동에서 상현이 본가인 경상북도 구미시
        도량1동까지 {getCountWithTimes({ hours: 7, minutes: 45 })}번 왕복할 동안
        <br />
        신혼여행지인 멕시코 칸쿤까지{' '}
        {getCountWithTimes({ hours: 34, minutes: 23 })}번 왕복할 동안
        <br />
        엽떡 신내점에서 엽기 닭볶음탕이{' '}
        {getCountWithTimes({ hours: 0, minutes: 30 })}번 배달올 동안
        <br />
        상현이가 좋아하는 유가연표 보쌈을{' '}
        {getCountWithTimes({ hours: 1, minutes: 0 })}번 더 해줄동안
        <br />
        2025 롤드컵에서 T1이 우승할 동안
      </Description>
    </Wrapper>
  )
}

export default Schedule
