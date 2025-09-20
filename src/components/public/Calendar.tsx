import { _2025_11_Weeks } from '@/lib/constants'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

const HEADERS = ['일', '월', '화', '수', '목', '금', '토']

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 20px;
  margin-bottom: 30px;
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

  color: #b0b0b0;
  ${({ isRed }) => (isRed ? 'color: #ea7653;' : '')}
  ${({ isTarget }) => (isTarget ? 'color: white;' : '')}
  
  ${({ isTarget }) => (isTarget ? 'background-color: #858585;' : '')}
  
  border-radius: 50%;
`

const Calendar = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Calendar
