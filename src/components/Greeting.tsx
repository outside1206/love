import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import nextConfig from '../../next.config'
import SectionTitle from './public/SectionTitle'

interface GreetingProps {
  visibleRelation?: boolean
}

const Wrapper = styled(motion.div)`
  padding-bottom: 40px;

  color: #e0e0e0;
`

const HandCopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
  margin-top: 40px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  display: block;
`

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;

  font-family: 'Anek Bangla Expanded';
  font-weight: 400;

  padding: 0 110px;
`

const Name = styled.div<{ isSmall?: boolean }>`
  font-size: 17px;

  margin-right: 5px;
`

const RelationWrapper = styled.div`
  width: 50px;

  display: flex;
  gap: 5px;
`

const Relation = styled.div<{ marginLeft?: number }>`
  display: flex;
  align-items: flex-end;

  font-size: 14px;
  color: #b0b0b0;

  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px` : '')}
`

const Greeting = ({ visibleRelation }: GreetingProps) => {
  const basePath = nextConfig.basePath ?? ''
  const galleryNo = 'gallery21'
  const srcsetWebp = [
    `${basePath}/images/converted/${galleryNo}-430.webp 430w`,
    `${basePath}/images/converted/${galleryNo}-860.webp 860w`,
    `${basePath}/images/converted/${galleryNo}-1290.webp 1290w`,
    `${basePath}/images/converted/${galleryNo}-1625.webp 1625w`,
  ].join(', ')

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <SectionTitle>Celebrate With Us</SectionTitle>
      <HandCopyWrapper>
        <Image
          src={`${basePath}/images/raws/hand-copy-1.png`}
          alt="hand-copy"
          width={312}
          height={52}
        />
        <Image
          src={`${basePath}/images/raws/hand-copy-2.png`}
          alt="hand-copy"
          width={322}
          height={57}
        />
        <Image
          src={`${basePath}/images/raws/hand-copy-3.png`}
          alt="hand-copy"
          width={243}
          height={58}
        />
        <Image
          src={`${basePath}/images/raws/hand-copy-4.png`}
          alt="hand-copy"
          width={275}
          height={79}
        />
        <Image
          src={`${basePath}/images/raws/hand-copy-4.png`}
          alt="hand-copy"
          width={275}
          height={79}
        />
        {visibleRelation && (
          <picture
            style={{
              marginBottom: '20px',
            }}
          >
            <source
              type="image/webp"
              srcSet={srcsetWebp}
              sizes={'(max-width: 430px) calc((100vw - 24px)/3), 350px'}
            />
            <Img
              src={`${basePath}/images/converted/${galleryNo}.jpeg`}
              alt="intro"
              loading="lazy"
              decoding="async"
            />
          </picture>
        )}
      </HandCopyWrapper>
      {visibleRelation && (
        <>
          <NameWrapper>
            <Name>변정수 · 윤춘화</Name>
            <RelationWrapper>
              <Relation>의</Relation>
              <Relation>아들</Relation>
            </RelationWrapper>
            <Name>상현</Name>
          </NameWrapper>
          <NameWrapper>
            <Name>유경석 · 이주희</Name>
            <RelationWrapper>
              <Relation>의</Relation>
              <Relation marginLeft={6}>딸</Relation>
            </RelationWrapper>
            <Name>가연</Name>
          </NameWrapper>
        </>
      )}
    </Wrapper>
  )
}
export default Greeting
