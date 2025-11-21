import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import nextConfig from '../../next.config'
import NaverMaps from './NaverMap'
import SectionTitle from './public/SectionTitle'
import { useEffect, useState } from 'react'

interface LocationProps {
  mapType: 'image' | 'naver'
}

const Wrapper = styled(motion.div)`
  padding-top: 40px;
`

const Title = styled.div`
  color: #e0e0e0;
`

const SubTitle = styled.div`
  font-size: 14px;
  color: #b0b0b0;

  margin-top: 6px;
  margin-bottom: 10px;
`

const ThanksTo = styled.div`
  text-align: left;
  font-family: 'Gotham';
  font-size: 10px;
  font-weight: 300;
  color: #e6e6e6;

  margin: 0 17px;
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
  padding: 8px 10px;

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

  margin: 0 17px;
  margin-top: 30px;
  gap: 8px;

  font-size: 14px;
  color: #b0b0b0;
  line-height: 1.6;
`

const Row = styled.div<{ isTip?: boolean }>`
  display: grid;
  grid-template-columns: ${({ isTip }) => (isTip ? '28px' : '60px')} 1fr;

  ${({ isTip }) => (isTip ? 'margin-top: 10px;' : '')}
`

const Label = styled.div<{ isTip?: boolean }>`
  color: #b0b0b0;
  ${({ isTip }) => (isTip ? 'font-size: 10px;' : '')}
  text-align: left;
`

const InfoDetail = styled.div`
  text-align: left;
`

const Text = styled.span<{ isTip?: boolean; marginTop?: number }>`
  color: white;
  ${({ isTip }) => (isTip ? 'font-size: 10px;' : '')}
`

const Highlight = styled.span`
  color: #d3727b;
`

const InfoWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`

const Link = styled.div`
  display: flex;
  align-items: center;

  text-decoration: underline;

  gap: 5px;
`

const basePath = nextConfig.basePath ?? ''
const isProd = process.env.NODE_ENV === 'production'

const Location = ({ mapType }: LocationProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (mapType === 'naver' && !isClient) {
    return
  }

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionTitle>Location</SectionTitle>
      <Title>L65호텔웨딩컨벤션 컨벤션홀</Title>
      <SubTitle>서울 동대문구 왕산로 200 SKY-L65 랜드마크타워 6F</SubTitle>
      {mapType === 'naver' && isClient && <NaverMaps />}
      {mapType === 'image' && (
        <>
          <Image
            src={`${basePath}/images/raws/map.png`}
            alt="map"
            width={324}
            height={244}
          />
          <ThanksTo>THANKS TO yoo kyeong</ThanksTo>
        </>
      )}
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
            // 'https://map.kakao.com/?map_type=TYPE_MAP&itemId=1274388923&target=car&urlX=510192&urlY=1133430&urlLevel=3'
            'https://kko.kakao.com/yvFcuGO7Xw'
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
        <ButtonStyled
          href="https://poi.tmobiweb.com/app/share/position?contents=cGtleT0xMTQwOTAyMzAxJnBvaUlkPTExNDA5MDIzJm5hdlNlcT0xJnR5cGU9MiZwb2lOYW1lPUw2NSVFRCU5OCVCOCVFRCU4NSU5NCVFQyU5QiVBOCVFQiU5NCVBOSVFQyVCQiVBOCVFQiVCMiVBNCVFQyU4NSU5OCZjZW50ZXJYPTQ1NzM3NDMmY2VudGVyWT0xMzUyNzcxJnRpbWU9MjAyNSVFQiU4NSU4NCsxMCVFQyU5QiU5NCsyNyVFQyU5RCVCQyswOCUzQTM1JnRlbD0wMi0yMTg0LTQ1MDAmYWRkcj0lRUMlODQlOUMlRUMlOUElQjgrJUVCJThGJTk5JUVCJThDJTgwJUVCJUFDJUI4JUVBJUI1JUFDKyVFQyU5OSU5NSVFQyU4MiVCMCVFQiVBMSU5QysyMDA%3D&tailParam=%7B%22reqType%22:%221100%22,%22reqMode%22:%221100%22,%22extra%22:%22112%22%7D"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <Row>
          <Label>지하철</Label>
          <InfoDetail>
            <InfoWrapper>
              <Text>1호선 청량리역 </Text>
              <Highlight>5번 출구</Highlight>
              <Text> 바로 앞</Text>
            </InfoWrapper>
            <InfoWrapper>
              <Link
                onClick={() => {
                  window.open(
                    `${isProd ? '/love' : ''}/subway-exit-5`,
                    '_blank',
                  )
                }}
              >
                <Image
                  src={`${basePath}/images/raws/triangle.png`}
                  alt="title"
                  width={8}
                  height={8}
                />
                <Text>5번 출구에서 예식장 가는 길 자세히 보기</Text>
              </Link>
            </InfoWrapper>
            <InfoWrapper>
              <Text>경의중앙선/수인분당선/경춘선 청량리역 </Text>
              <Highlight>1번 출구</Highlight>
              <Text> 바로 앞</Text>
            </InfoWrapper>
            <InfoWrapper>
              <Link
                onClick={() => {
                  window.open(
                    `${isProd ? '/love' : ''}/subway-exit-1`,
                    '_blank',
                  )
                }}
              >
                <Image
                  src={`${basePath}/images/raws/triangle.png`}
                  alt="title"
                  width={8}
                  height={8}
                />
                <Text>1번 출구에서 예식장 가는 길 자세히 보기</Text>
              </Link>
            </InfoWrapper>
          </InfoDetail>
        </Row>
        <Row>
          <Label>버&nbsp;&nbsp;&nbsp;스</Label>
          <InfoDetail>
            <Text>청량리역 환승센터 하차</Text>
          </InfoDetail>
        </Row>
        <Row>
          <Label>자가용</Label>
          <InfoDetail>
            <Text>
              &apos;L65호텔웨딩컨벤션&apos; 또는 &apos;청량리역 5번 출구&apos;
              검색 후
            </Text>
            <br />
            <Text>전용 지하 주차장 3층, 4층 주차</Text>
            <br />
            <Text>• 중랑교(시조사 삼거리) 방향에서 올 경우</Text>
            <br />
            <Text>• 광화문, 종로, 홍릉수목원 방향에서 올 경우</Text>
          </InfoDetail>
        </Row>
        <Row>
          <Label>주&nbsp;&nbsp;&nbsp;소</Label>
          <InfoDetail>
            <Text>서울특별시 동대문구 왕산로 200 롯데캐슬스카이-L65</Text>
            <br />
            <Text>또는 서울특별시 동대문구 전농동 620-69</Text>
          </InfoDetail>
        </Row>
      </Info>
    </Wrapper>
  )
}

export default Location
