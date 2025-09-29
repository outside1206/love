import styled from '@emotion/styled'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { useEffect, useState } from 'react'

dayjs.extend(duration)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 60px;
  margin-top: 20px;
`

const UnitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Value = styled.div`
  font-size: 16px;
  color: #e0e0e0;
`

const Unit = styled.div`
  font-size: 12px;
  color: #e0e0e0;
`

const DdayCountdown = () => {
  const targetDate = dayjs('2025-11-22 13:00:00')

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs()
      const diff = targetDate.diff(now)

      if (diff <= 0) {
        clearInterval(timer)
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        })

        return
      }

      const days = targetDate.diff(now, 'day') // ✅ 총 일수
      const hours = targetDate.diff(now, 'hour') % 24
      const minutes = targetDate.diff(now, 'minute') % 60
      const seconds = targetDate.diff(now, 'second') % 60

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <Wrapper>
      <UnitWrapper>
        <Value>{timeLeft.days}</Value>
        <Unit>일</Unit>
      </UnitWrapper>
      <UnitWrapper>
        <Value>{timeLeft.hours}</Value>
        <Unit>시간</Unit>
      </UnitWrapper>
      <UnitWrapper>
        <Value>{timeLeft.minutes}</Value>
        <Unit>분</Unit>
      </UnitWrapper>
      <UnitWrapper>
        <Value>{timeLeft.seconds}</Value>
        <Unit>초</Unit>
      </UnitWrapper>
    </Wrapper>
  )
}

export default DdayCountdown
