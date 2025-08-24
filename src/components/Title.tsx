import styled from '@emotion/styled'
import Image from 'next/image'
import nextConfig from '../../next.config'

const Wrapper = styled.div`
  position: relative;

  // overflow: hidden;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`

const Title = () => {
  return (
    <Wrapper>
      <StyledImage
        src={`${nextConfig.basePath}/images/title.jpeg`}
        alt="title"
        width={0}
        height={0}
        sizes="100vw"
      />
    </Wrapper>
  )
}

export default Title
