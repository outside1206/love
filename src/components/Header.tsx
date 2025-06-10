import styled from '@emotion/styled'
// import Video from 'next-video'
import Image from 'next/image'

const Wrapper = styled.div`
  position: relative;

  width: 430px;
  // height: 932px;
  overflow: hidden;
`

const Text = styled.div`
  position: absolute;
  width: 100%;
  top: 10%;

  color: white;
  font-size: 32px;
  font-weight: bold;
`

const Header = () => {
  return (
    <Wrapper>
      <Image
        src={'/images/thumbnail-1.png'}
        alt="asd"
        width={430}
        height={645}
      />
      {/* <Video src={'/video.MP4'} autoPlay loop playsInline /> */}
      <Text>WE GET MARRY</Text>
    </Wrapper>
  )
}

export default Header
