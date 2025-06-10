import styled from '@emotion/styled'
import Image from 'next/image'
import nextConfig from '../../next.config'

const Page = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 430px;
  min-width: 430px;
  position: relative;
  padding-bottom: 0;
  box-shadow: 0px 0px 18px rgb(0 0 0 / 10%);
  transition: filter 1s ease-out 0s;

  background-color: white;
`

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`

const GalleryPage = () => {
  const imageCount = 34
  const images = Array.from({ length: imageCount }, (_, i) => i + 1)

  return (
    <Page>
      {images.map((num) => (
        <ImageWrapper key={`gallery${num}`}>
          <StyledImage
            src={`${nextConfig.basePath}/images/gallery${num}.jpeg`}
            alt={`gallery${num}`}
            width={0}
            height={0}
            sizes="100vw"
          />
        </ImageWrapper>
      ))}
    </Page>
  )
}

export default GalleryPage
