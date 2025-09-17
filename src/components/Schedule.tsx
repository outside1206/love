import { _2025_11_Weeks } from '@/lib/constants'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import SectionTitle from './public/SectionTitle'

const HEADERS = ['일', '월', '화', '수', '목', '금', '토']

const Wrapper = styled(motion.div)`
  padding-top: 40px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Anek Bangla';
`

const Date = styled.div`
  color: #e0e0e0;
`

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px 20px 0 20px;
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

  font-family: 'Anek Bangla';
  color: #b0b0b0;
  ${({ isRed }) => (isRed ? 'color: #ea7653;' : '')}
  ${({ isTarget }) => (isTarget ? 'color: white;' : '')}
  
  ${({ isTarget }) => (isTarget ? 'background-color: #858585;' : '')}
  
  border-radius: 50%;
`

const Location = styled.div`
  font-family: 'Anek Bangla';
  color: #e0e0e0;
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
        <SectionTitle>SAVE THE DATE</SectionTitle>
        <Date>2025.11.22 SAT 1PM</Date>
        <Date>D - {dayjs('2025-11-23').diff(dayjs(), 'days')}</Date>
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
      <Location>L65호텔웨딩컨벤션 컨벤션홀</Location>
    </Wrapper>
  )
}

export default Schedule
