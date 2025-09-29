import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Calendar from './public/Calendar'
import SectionTitle from './public/SectionTitle'
import DdayCountdown from './public/DdayCountdown'

interface ScheduleProps {
  visibleDday?: boolean
}

const Wrapper = styled(motion.div)`
  padding-top: 40px;
`

const Month = styled.div`
  font-size: 17px;
  color: white;

  margin: 20px 0;
`

const Date = styled.div`
  font-size: 14px;
  color: #e0e0e0;

  margin-bottom: 10px;
`

const Schedule = ({ visibleDday }: ScheduleProps) => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionTitle>Save The Date</SectionTitle>
      <Month>11</Month>
      <Calendar />
      <Date>2025년 11월 22일 토요일 오후 1시</Date>
      {visibleDday && <DdayCountdown />}
    </Wrapper>
  )
}

export default Schedule
