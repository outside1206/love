import styled from '@emotion/styled'
import SectionTitle from './public/SectionTitle'
import { useState } from 'react'
import ImageModal from './public/ImageModal'
import nextConfig from '../../next.config'

const Wrapper = styled.div`
  margin-top: 8px;
`

const Text = styled.div<{ marginBottom?: number }>`
  color: #fff;
  font-size: 14px;
  line-height: 25px;

  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`

const basePath = nextConfig.basePath ?? ''
const marginBottom = 50

const Tip = () => {
  const [atmOpen, setAtmOpen] = useState<boolean>(false)

  return (
    <Wrapper>
      <SectionTitle>Tip</SectionTitle>
      <Text>연회장 내 가장 인기있는 메뉴는 초밥 코너입니다.</Text>
      <Text marginBottom={marginBottom}>
        식사 시간에는 줄이 길어지니 가장 먼저 드시길 추천드려요.
      </Text>

      <Text>예식이 진행되는 컨벤션 홀 입구에 신랑, 신부와 함께</Text>
      <Text>사진을 찍는 듯한 거울 포토존이 마련되어 있습니다.</Text>
      <Text>로비에서 신랑, 신부와 반갑게 인사한 뒤</Text>
      <Text marginBottom={marginBottom}>
        포토존에서도 활짝 밝은 사진 남겨주세요.
      </Text>

      <Text>화장실은 엘레베이터에서 홀 반대편으로 이동하시면 있습니다.</Text>

      <Text
        style={{
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
        onClick={() => {
          setAtmOpen(true)
        }}
      >
        ATM은 에스컬레이터 올라오는 길에 있습니다.(클릭)
      </Text>

      <Text>주차구역 E4, F4 주차하면 이동이 편리해요.</Text>

      <ImageModal
        open={atmOpen}
        onClose={() => {
          setAtmOpen(false)
        }}
        image={`${basePath}/images/raws/atm.jpg`}
        descriptions={[
          '엘레베이터에서 내리신 뒤',
          '좌측 가든홀 방향으로 이동하면 팻말이 보입니다. ',
          '문을 열고 나가시면 ATM 기기 2대와 테이블이 있습니다.',
        ]}
      />
    </Wrapper>
  )
}

export default Tip
