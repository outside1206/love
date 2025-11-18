import styled from '@emotion/styled'
import SectionTitle from './public/SectionTitle'

const Wrapper = styled.div`
  margin-top: 8px;
`

const Text = styled.div<{ marginBottom?: number }>`
  color: #fff;
  font-size: 14px;
  line-height: 25px;

  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`

const Tip = () => {
  const marginBottom = 50

  return (
    <Wrapper>
      <SectionTitle>Tip</SectionTitle>
      <Text>연회장 내 가장 인기있는 메뉴는 초밥 코너입니다.</Text>
      <Text marginBottom={marginBottom}>
        식사 시간에는 줄이 길어지니 가장 먼저 드시길 추천드려요.
      </Text>

      <Text>예식이 진행되는 컨벤션 홀 입구에 신랑, 신부와 함께</Text>
      <Text>사진일 찍는 듯한 거울 포토존이 마련되어 있습니다.</Text>
      <Text>로비에서 신랑, 신부와 반갑게 인사한 뒤</Text>
      <Text marginBottom={marginBottom}>
        포토존에서도 활짝 밝은 사진 남겨주세요.
      </Text>

      <Text>화장실은 어디 있습니다.</Text>

      <Text>ATM은 어디 있습니다.</Text>

      <Text>주차구역 E4, F4 주차하면 이동이 편리해요.</Text>
    </Wrapper>
  )
}

export default Tip
