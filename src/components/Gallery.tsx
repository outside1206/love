import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import nextConfig from '../../next.config'

const Wrapper = styled.div`
  padding: 40px 0;
  background-color: #fffdf4;
`

const Title = styled.div`
  color: #4e4c4b;

  margin-bottom: 40px;
`

const LinkArea = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 4px;

  margin: 0 20px;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  max-width: 300px;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`

const getRandomUniqueNumbers = (count: number, max: number): number[] => {
  const nums = new Set<number>()
  while (nums.size < count) {
    nums.add(Math.floor(Math.random() * max) + 1)
  }
  return Array.from(nums)
}

const Gallery = () => {
  const [isClient, setIsClient] = useState(false)

  const imageNumbers = useMemo(() => getRandomUniqueNumbers(4, 34), [])

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Wrapper>
      <Title>GALLERY</Title>
      {isClient && (
        <LinkArea href="/gallery">
          <Container
            onClick={() => {
              console.log('123')
            }}
          >
            {imageNumbers.map((num, idx) => (
              <ImageWrapper key={`index-gallery-${num}`}>
                <Image
                  src={`${nextConfig.basePath}/images/gallery${num}.jpeg`}
                  alt={`gallery${num}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {idx === 3 && <Overlay>사진 더 보기</Overlay>}
              </ImageWrapper>
            ))}
          </Container>
        </LinkArea>
      )}
    </Wrapper>
  )
}

export default Gallery
