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

const SecondWrapper = styled.div``

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;

  font-family: 'Anek Bangla Expanded';
  font-weight: 400;
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
          <Image
            src={`${basePath}/images/converted/gallery21-860.webp`}
            alt="hand-copy"
            width={275}
            height={430}
            style={{
              marginBottom: '20px',
              borderRadius: '10px',
            }}
          />
        )}
      </HandCopyWrapper>
      {visibleRelation && (
        <SecondWrapper>
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
        </SecondWrapper>
      )}
    </Wrapper>
  )
}
export default Greeting
