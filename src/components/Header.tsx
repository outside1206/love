import styled from '@emotion/styled'

import Image from 'next/image'
import nextConfig from '../../next.config'

const Wrapper = styled.div`
  position: relative;

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

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`

const Header = () => {
  return (
    <Wrapper>
      <StyledImage
        src={`${nextConfig.basePath}/images/thumbnail-1.png`}
        alt="asd"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Text>WE GET MARRY</Text>
    </Wrapper>
  )
}

export default Header
