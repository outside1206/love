import styled from '@emotion/styled'

import Image from 'next/image'
import nextConfig from '../../next.config'

const Wrapper = styled.div`
  position: relative;

  overflow: hidden;
`

const Text = styled.div`
  width: 100%;
  top: 10%;

  position: absolute;

  color: white;
  font-size: 32px;
  font-weight: bold;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`

const Thumbnail = () => {
  return (
    <Wrapper>
      <StyledImage
        src={`${nextConfig.basePath}/images/thumbnail1.png`}
        alt="thumbnail"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Text>WE GET MARRY</Text>
    </Wrapper>
  )
}

export default Thumbnail
