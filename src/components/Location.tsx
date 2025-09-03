import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import NaverMaps from './NaverMap'
import Image from 'next/image'
import nextConfig from '../../next.config'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  padding: 40px 0;

  // border: 1px solid red;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
  margin-bottom: 30px;
`

const Title = styled.div`
  color: #e0e0e0;
`

const SubTitle = styled.div`
  color: #b0b0b0;
  font-size: 13px;
`

const LocationSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
  margin-bottom: 30px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 17px;
  margin-top: 20px;
  gap: 10px;

  /* 390px 이하에서 가로 여유 조금 더 확보 */
  @media (max-width: 390px) {
    margin: 0 12px;
    margin-top: 18px;
    gap: 6px;
  }

  /* 360px 이하(아주 좁은 단말) */
  @media (max-width: 360px) {
    margin: 0 8px;
    margin-top: 16px;
    gap: 4px;
  }
`

const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  gap: 6px;
  padding: 10px 14px;

  font-size: 13px;
  color: #4e4c4b;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  background-color: #f6f7f9;

  border-radius: 10px;
  border: none;

  cursor: pointer;

  /* 줄바꿈 방지 (한 줄 유지) */
  white-space: nowrap;
  word-break: keep-all;

  /* 버튼 자체가 너무 찌그러지지 않도록 최소폭 살짝 확보 (선택) */
  min-width: 96px;

  &:hover {
    background-color: #e9ebee;
  }

  /* 390px 이하: 패딩만 살짝 축소 */
  @media (max-width: 390px) {
    padding: 8px 10px;
  }

  /* 360px 이하: 더 타이트하게 */
  @media (max-width: 360px) {
    padding: 6px 8px;
  }
`

const Icon = styled(Image)`
  width: 20px;
  height: 20px;

  @media (max-width: 390px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 360px) {
    width: 16px;
    height: 16px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin: 30px 0;
  padding: 0 17px;
  gap: 30px;

  color: #b0b0b0;
  font-size: 14px;
  text-align: left;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
`

const Method = styled.div`
  color: #e0e0e0;
  font-weight: 600;

  margin-bottom: 10px;
`

const Paragraph = styled.p`
  line-height: 1.6;

  margin: 0;
  padding: 0 14px;
`

const Highlight = styled.span`
  font-weight: 600;
`

const LineSpan = styled.span<{ color?: string }>`
  ${({ color }) =>
    color &&
    `
    background-color: ${color};
    color: white;

    `}
  font-size: 10px;

  padding: 3px 10px;
  margin-right: 2px;

  border-radius: 30px;
`

const Location = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Header>
        <SubTitle>LOCATION</SubTitle>
        <Title>오시는 길</Title>
      </Header>
      <LocationSection>
        <Title>L65호텔웨딩컨벤션 컨벤션홀</Title>
        <SubTitle>서울 동대문구 왕산로 200 SKY-L65 랜드마크타워 6F</SubTitle>
      </LocationSection>
      {isClient && <NaverMaps />}
      <ButtonWrapper>
        <ButtonStyled
          href={
            'https://map.naver.com/p/entry/place/13171608?c=15.00,0,0,0,dh&placePath=/home?from%3Dmap&fromPanelNum=1&additionalHeight=76&timestamp=202506081656&locale=ko&svcName=map_pcv5'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            src={`${nextConfig.basePath}/images/raws/navermaps.png`}
            alt="navermaps"
            width={20}
            height={20}
          />
          네이버지도
        </ButtonStyled>

        <ButtonStyled
          href={
            'https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,494574,1121498&rt1=&rt2=%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98&rtIds=,&rtTypes=,'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            src={`${nextConfig.basePath}/images/raws/kakaomaps.png`}
            alt="kakaomaps"
            width={20}
            height={20}
          />
          카카오맵
        </ButtonStyled>
        <ButtonStyled>
          <Icon
            src={`${nextConfig.basePath}/images/raws/tmap.jpeg`}
            alt="tmap"
            width={20}
            height={20}
          />
          티맵
        </ButtonStyled>
      </ButtonWrapper>
      <Info>
        <Section>
          <Method>지하철</Method>
          <Paragraph>
            <LineSpan color="#365abc">1호선</LineSpan> 청량리역 5번 출구 바로 앞
          </Paragraph>
          <Paragraph>
            <LineSpan color="#3d9e9e">경의중앙</LineSpan>
            <LineSpan color="#fe9901">수인분당</LineSpan>
            <LineSpan color="#87d7be">수인분당</LineSpan> 청량리역 1번 출구 바로
            앞
          </Paragraph>
        </Section>

        <Section>
          <Method>버스</Method>
          <Paragraph>청량리역 환승센터 하차</Paragraph>
        </Section>

        <Section>
          <Method>자가용</Method>
          <Paragraph>‘L65호텔웨딩컨벤션’ 또는 ‘청량리L65’ 검색</Paragraph>
          <Paragraph>
            지하 3층, 4층만 주차 가능
            <br />
            <Highlight>지하 2층은 주차가 불가능합니다</Highlight>
            <br />
            (주차장 출입구를 확인해 주세요)
          </Paragraph>
        </Section>

        <Section>
          <Method>구미 대절버스</Method>
          <Paragraph>
            차량번호 : 75버 9581 (예스 고속 관광)
            <br />
            출발장소 : 도레미입구 맞은 편 (구미경찰서)
            <br />
            출발일시 : <Highlight>5월 17일 오전 9시 30분 출발</Highlight>
            <br />* 이용을 원하시는 분은 사전에 꼭 연락 부탁드립니다.
          </Paragraph>
        </Section>
      </Info>
    </Wrapper>
  )
}

export default Location
