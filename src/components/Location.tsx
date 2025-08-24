import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import NaverMaps from './NaverMap'
import Image from 'next/image'
import nextConfig from '../../next.config'

const Wrapper = styled.div`
  padding: 40px 0;
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

  &:hover {
    background-color: #e9ebee;
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
    <Wrapper>
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
          <Image
            src={`${nextConfig.basePath}/images/navermaps.png`}
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
          <Image
            src={`${nextConfig.basePath}/images/kakaomaps.png`}
            alt="kakaomaps"
            width={20}
            height={20}
          />
          카카오맵
        </ButtonStyled>
        <ButtonStyled>
          <Image
            src={`${nextConfig.basePath}/images/tmap.jpeg`}
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
          <Paragraph>
            <LineSpan color="#386de8">간선버스</LineSpan> 105, 120, 121, 147,
            202, 241, 260, 261, 270, 271, 272, 420, 720
          </Paragraph>
          <Paragraph>
            <LineSpan color="#3cc344">지선버스</LineSpan> 1213, 1222, 1224,
            1227, 2115, 2230, 3216, 3220
          </Paragraph>
          <Paragraph>
            <LineSpan color="#3d9e9e">일반버스</LineSpan> 51, 65, 166, 170, 707
          </Paragraph>
          <Paragraph>
            <LineSpan color="#8841d2">좌석버스</LineSpan> 330-1
          </Paragraph>
          <Paragraph>
            <LineSpan color="#fb5852">직행버스</LineSpan> 1330-2, 1330-3,
            1330-4, 1330-44, 3200, 8005
          </Paragraph>
          <Paragraph>
            <LineSpan color="#65a6d2">공항버스</LineSpan> 6002
          </Paragraph>
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
