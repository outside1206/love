import styled from '@emotion/styled'
import Image from 'next/image'

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

  //   position: relative;
  //   aspect-ratio: 4 / 3;

  img {
    width: 430px;
    height: auto;
  }
`

const GalleryPage = () => {
  const imageCount = 34
  const images = Array.from({ length: imageCount }, (_, i) => i + 1)

  return (
    <Page>
      {images.map((num) => (
        <ImageWrapper key={`gallery${num}`}>
          <Image
            src={`/images/gallery${num}.jpeg`}
            alt={`gallery${num}`}
            width={430} // Page의 max-width와 동일
            height={9999} // placeholder, 실제 비율은 이미지 원본 비율에 따라 자동 조정됨
            style={{ height: 'auto' }}
          />
        </ImageWrapper>
      ))}
    </Page>
  )
}

export default GalleryPage
