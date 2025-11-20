import styled from '@emotion/styled'
import nextConfig from '../../next.config'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 430px;
  position: relative;
  padding-bottom: 0;
  box-shadow: 0px 0px 18px rgb(0 0 0 / 10%);
  transition: filter 1s ease-out 0s;

  background-color: black;
`

const Title = styled.div`
  display: flex;

  font-weight: 700;
  font-size: 14px;
  color: #fff;

  margin-bottom: 15px;
`

const Content = styled.div`
  margin-bottom: 30px;
`

const Text = styled.div`
  display: flex;

  font-size: 10px;
  color: #fff;
`

const ImageWrapper = styled.div<{ isCenter?: boolean }>`
  display: flex;
  ${({ isCenter }) => (isCenter ? 'justify-content: center;' : '')}
  align-items: center;

  margin-bottom: 10px;
  gap: 10px;
`

const basePath = nextConfig.basePath ?? ''

const SubwayExit1 = () => {
  console.log('123')
  return (
    <Wrapper>
      <Title>1번 출구 이용시</Title>
      <Content>
        <ImageWrapper>
          <Image
            src={`${basePath}/images/raws/subway-exit-1-1.png`}
            alt="map"
            width={150}
            height={200}
          />
        </ImageWrapper>
        <Text>수인분당선, 경의중앙선, KTX, ITX를 이용하시는 경우</Text>
        <Text>5번 출구로 나오시면 됩니다.</Text>
      </Content>
      <Content>
        <ImageWrapper isCenter>
          <Image
            src={`${basePath}/images/raws/subway-exit-1-2.png`}
            alt="map"
            width={150}
            height={113}
          />
        </ImageWrapper>
        <ImageWrapper isCenter>
          <Image
            src={`${basePath}/images/raws/subway-exit-1-3.png`}
            alt="map"
            width={90}
            height={120}
          />
          <Image
            src={`${basePath}/images/raws/subway-exit-1-4.png`}
            alt="map"
            width={90}
            height={120}
          />
        </ImageWrapper>
        <Text>출구로 나오시면 바로 왼편에</Text>
        <Text>예식장으로 이어지는 작은 언덕 같은 계단이 보입니다.</Text>
        <Text>(입구에 안내해주시는 분도 계세요~)</Text>
      </Content>
      <Content>
        <ImageWrapper isCenter>
          <Image
            src={`${basePath}/images/raws/subway-exit-1-5.png`}
            alt="map"
            width={150}
            height={113}
          />
        </ImageWrapper>
        <ImageWrapper isCenter>
          <Image
            src={`${basePath}/images/raws/subway-exit-1-6.png`}
            alt="map"
            width={150}
            height={113}
          />
          <Image
            src={`${basePath}/images/raws/subway-exit-1-7.png`}
            alt="map"
            width={90}
            height={120}
          />
        </ImageWrapper>
        <Text>
          계단을 올라오시면 사진과 같이 웨딩홀 입구까지 길게 길이 있어요.
        </Text>
      </Content>
      <Content>
        <ImageWrapper isCenter>
          <Image
            src={`${basePath}/images/raws/subway-exit-1-8.png`}
            alt="map"
            width={90}
            height={120}
          />
          <Image
            src={`${basePath}/images/raws/subway-exit-1-9.png`}
            alt="map"
            width={90}
            height={120}
          />
        </ImageWrapper>
        <Text>
          계단을 올라오시면 사진과 같이 웨딩홀 입구까지 길게 길이 있어요.
        </Text>
      </Content>
    </Wrapper>
  )
}

export default SubwayExit1
