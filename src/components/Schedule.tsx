import { _2025_11_Weeks } from '@/lib/constants'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'

const HEADERS = ['일', '월', '화', '수', '목', '금', '토']

const Wrapper = styled(motion.div)`
  padding: 52px 0;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`

const DDay = styled.div`
  color: #e0e0e0;
`

const Title = styled.div`
  color: #e0e0e0;
`

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 40px 20px 0 20px;
`

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  row-gap: 10px;
  column-gap: 25px;
`

const CalendarCell = styled.div<{ isRed?: boolean; isTarget?: boolean }>`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  color: #b0b0b0;
  ${({ isRed }) => (isRed ? 'color: #ea7653;' : '')}
  ${({ isTarget }) => (isTarget ? 'color: white;' : '')}
  
  ${({ isTarget }) => (isTarget ? 'background-color: #858585;' : '')}
  
  border-radius: 50%;
`

const Schedule = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Header>
        <DDay>D - {dayjs('2025-11-23').diff(dayjs(), 'days')}</DDay>
        <Title>2025년 11월 22일 토요일 오후 1시</Title>
        <Title>그대들을 초대합니다.</Title>
      </Header>
      <CalendarContainer>
        <CalendarWrapper>
          {HEADERS.map((header, index) => (
            <CalendarCell key={`header-${index}`} isRed={!Boolean(index)}>
              {header}
            </CalendarCell>
          ))}
          {_2025_11_Weeks.map((headerOrWeek) => {
            return headerOrWeek.map((day, index) => (
              <CalendarCell
                key={`day-${day}-${index}`}
                isRed={!Boolean(index)}
                isTarget={day === '2025-11-22'}
              >
                {day ? dayjs(day).format('D') : ''}
              </CalendarCell>
            ))
          })}
        </CalendarWrapper>
      </CalendarContainer>
    </Wrapper>
  )
}

export default Schedule
