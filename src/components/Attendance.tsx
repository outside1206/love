import styled from '@emotion/styled'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Wrapper = styled.div`
  padding: 60px 0;
  background-color: #fffdf4;

  color: #4e4c4b;
`

const SubTitle = styled.div`
  font-size: 12px;
`

const Title = styled.div`
  margin-top: 10px;

  font-size: 18px;
`

const Header = styled.div`
  margin-bottom: 60px;
`

const Body = styled.div`
  color: #4e4c4b;
  font-size: 13px;
`

const HallInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 80px 0 80px;
  padding: 20px 0;

  gap: 5px;

  border-top: 1px dashed #4e4c4b;
  border-bottom: 1px dashed #4e4c4b;
`

const HallInfoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #4e4c4b;
`

const Attendance = () => {
  return (
    <Wrapper>
      <Header>
        <SubTitle>SAVE THE DATE</SubTitle>
        <Title>참석 여부를 전달해주세요</Title>
      </Header>
      <Body>
        <p>결혼식 참석 전 참석여부를 응답해주시면</p>
        <p>결혼식 준비에 있어 큰 도움이 됩니다.</p>
        <p>한 분 한 분 더욱 귀하게 모실 수 있도록</p>
        <p>아래 버튼을 클릭하여 참석여부를</p>
        <p>전달 부탁드립니다.</p>
      </Body>
      <HallInfo>
        <HallInfoText>
          <FaCalendarAlt />
          11월 22일 오후 1시
        </HallInfoText>
        <HallInfoText>
          <FaMapMarkerAlt />
          L65호텔웨딩컨벤션 컨벤션홀
        </HallInfoText>
      </HallInfo>
    </Wrapper>
  )
}

export default Attendance
