import styled from '@emotion/styled'
import SectionTitle from './public/SectionTitle'

const Wrapper = styled.div``

const ContentList = styled.div`
  margin-top: 40px;
`

const Content = styled.div`
  margin-bottom: 40px;
`

const Title = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
`

const Body = styled.div`
  color: #fff;
  font-size: 14px;
  line-height: 25px;
`

const NOTICES = [
  {
    title: '반려견 화견 안내',
    body: [
      '본식 중 반려견이 혼인서약서를 전달하는 화견 이벤트가',
      '예정되어 있습니다. 강아지가 잠시 등장하오니',
      '따뜻한 시선으로 지켜봐주시면 감사하겠습니다.',
    ],
  },
  {
    title: '하객 맞이 안내',
    body: [
      '식 전 신부가 직접 로비에서 하객맞이를 진행할 예정입니다.',
      '식 시작 전 드레스 환복 시간이 필요해',
      '식 시작 20분 전부턴 신부와 인사가 어려울 수 있습니다.',
    ],
  },
  {
    title: '좌석 안내',
    body: [
      '신랑, 신부 측 구분 없이 앞 쪽 빈 좌석부터 ',
      '자유롭게 착석해주시면 감사하겠습니다.',
    ],
  },
  {
    title: '식사 안내',
    body: [
      '식사는 예식 30분전인 12시 30분부터 가능합니다.',
      '뷔페식으로 예식 홀 바로 옆 연회장에서 진행됩니다.',
    ],
  },
  {
    title: '주차 안내',
    body: [
      '90분 무료 주차가 제공되며 연회장 앞 태블릿에서',
      '차랑번호 4자리로 주차 등록 후 이용 가능합니다.',
      '이후 30분당 500원씩 부과됩니다.',
      '3시간 초과시 10분당 1,000원씩 부과됩니다.',
    ],
  },
  {
    title: '소인 및 유아 안내',
    body: [
      '소인은 4살부터 10살까지 입니다. ',
      '(2015년생 ~ 2021년생)',
      '연회장 중앙에 아기 의자와 식기가 준비되어 있습니다.',
      '이유식을 데울 수 있는 전자레인지가',
      '연회장 입구에 마련되어 있습니다.',
    ],
  },
]

const Notice = () => {
  return (
    <Wrapper>
      <SectionTitle>Notice</SectionTitle>
      <ContentList>
        {NOTICES.map((notice, index) => (
          <Content key={index}>
            <Title>{notice.title}</Title>
            {notice.body.map((line, lineIndex) => (
              <Body key={lineIndex}>{line}</Body>
            ))}
          </Content>
        ))}
      </ContentList>
    </Wrapper>
  )
}

export default Notice
