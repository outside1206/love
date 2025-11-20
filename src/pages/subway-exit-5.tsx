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

  padding: 15px;
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

const SubwayExit5 = () => {
  return (
    <Wrapper>
      <Title>5번 출구 이용시</Title>
      <Content>
        <Text>
          1호선을 이용하시는 경우, 청량리역 5번 출구가 가장 가깝습니다.
        </Text>
      </Content>
      <Content>
        <ImageWrapper isCenter>
          <Image
            src={`${basePath}/images/raws/subway-exit-5-1.png`}
            alt="map"
            width={90}
            height={120}
          />
        </ImageWrapper>
        <ImageWrapper isCenter>
          <Image
            src={`${basePath}/images/raws/subway-exit-5-2.png`}
            alt="map"
            width={90}
            height={120}
          />
          <Image
            src={`${basePath}/images/raws/subway-exit-5-3.png`}
            alt="map"
            width={90}
            height={120}
          />
        </ImageWrapper>
        <Text>5번 출구 에스컬레이터를 타고 올라오면</Text>
        <Text>면에 입간판이 세워져 있어요.</Text>
        <Text>리고 바닥에도 가시는 길 안내가 되어 있습니다.</Text>
      </Content>
      <Content>
        <ImageWrapper isCenter>
          <Image
            src={`${basePath}/images/raws/subway-exit-5-4.png`}
            alt="map"
            width={90}
            height={120}
          />
          <Image
            src={`${basePath}/images/raws/subway-exit-5-5.png`}
            alt="map"
            width={90}
            height={120}
          />
        </ImageWrapper>
        <ImageWrapper isCenter>
          <Image
            src={`${basePath}/images/raws/subway-exit-5-6.png`}
            alt="map"
            width={90}
            height={120}
          />
          <Image
            src={`${basePath}/images/raws/subway-exit-5-7.png`}
            alt="map"
            width={90}
            height={120}
          />
        </ImageWrapper>
        <Text>건물 초입에 입구가 있는 것이 아니라 깊숙히 들어가야 해요.</Text>
        <Text>
          길 안내를 따락 쭉 안쪽으로 가시면 이렇게 예식장 입구가 나와요
        </Text>
      </Content>
    </Wrapper>
  )
}

export default SubwayExit5
