import styled from '@emotion/styled'
import dayjs from 'dayjs'

const Wrapper = styled.div``

const DdayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 40px;
`

const Text = styled.div<{ highlight?: boolean }>`
  font-size: ${({ highlight }) => (highlight ? '18' : '14')}px;
  color: ${({ highlight }) => (highlight ? '#ff526c' : 'white')};
  line-height: 25px;
`

const Description = styled.div`
  display: flex;
  justify-content: center;
`

const NumberText = styled.div`
  font-size: 16px;
  color: white;
`

const Dday = () => {
  const targetDateStr = '2025-11-22'
  const dday = Math.ceil(dayjs(targetDateStr).diff(dayjs(), 'days', true))

  const getCountUntil = (
    payload:
      | { unit: 'month' }
      | { unit: 'week'; targetWeekDay: number }
      | { unit: 'day' }
      | { unit: 'time'; hours: number; minutes: number },
  ) => {
    const now = dayjs()
    const targetDate = dayjs(targetDateStr)
    const { unit } = payload

    switch (unit) {
      case 'day':
        return targetDate.diff(now, 'day') + 1

      case 'week':
        const { targetWeekDay } = payload

        if (targetWeekDay === undefined) {
          throw new Error('week 단위 계산에는 targetWeekDay가 필요합니다.')
        }
        let count = 0
        let current = now
        while (
          current.isBefore(targetDate) ||
          current.isSame(targetDate, 'day')
        ) {
          if (current.day() === targetWeekDay) {
            count++
          }
          current = current.add(1, 'day')
        }

        return count

      case 'month':
        return targetDate.diff(now, 'month') + 1

      case 'time':
        const { hours, minutes } = payload

        const remainingMinutes = targetDate.diff(now, 'minute')
        const roundTripMinutes = (hours * 60 + minutes) * 2
        return (remainingMinutes / roundTripMinutes).toFixed(1)

      default:
        throw new Error('지원하지 않는 단위입니다.')
    }
  }

  return (
    <Wrapper>
      <DdayWrapper>
        <Text>결혼식까지</Text>
        &nbsp;
        <Text highlight>{dday}일</Text>
        &nbsp;
        <Text>남았어요.</Text>
      </DdayWrapper>
      <br />
      <Text>이 시간은</Text>
      <br />
      <Description>
        <Text>새로 산 Z플립7 할부금을 </Text>
        <NumberText>
          &nbsp;
          {getCountUntil({
            unit: 'month',
          })}
        </NumberText>
        <Text>번 더내고</Text>
      </Description>

      <Description>
        <Text>상현이가 좋아하는 금요웹툰 &lt;상남자&gt;를 </Text>
        <NumberText>
          &nbsp;
          {getCountUntil({
            unit: 'week',
            targetWeekDay: 5,
          })}
        </NumberText>
        <Text>화 더보고</Text>
      </Description>

      <Description>
        <Text>신혼여행지인 칸쿤까지 </Text>
        <NumberText>
          &nbsp;
          {getCountUntil({
            unit: 'time',
            hours: 34,
            minutes: 23,
          })}
        </NumberText>
        <Text>번을 왕복하고</Text>
      </Description>
      <Description>
        <Text>2025년 롤드컵에서 T1이 1번 우승할 수 있는 시간</Text>
      </Description>
      <br />
      <Text>바로 그런 시간입니다.</Text>
    </Wrapper>
  )
}

export default Dday
