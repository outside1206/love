import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import nextConfig from '../../next.config'

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 1625 / 2438;
  max-width: 430px;
  margin: 0 auto;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: 45px;
`

const AnekBangla = styled.div<{ fontSize?: number }>`
  font-family: 'Anek Bangla Expanded';
  font-weight: 400;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '18px')};
  color: #ff5e6c;
`

const BrownhillScript = styled.div`
  font-family: 'Brownhill Script';
  font-size: 60px;

  color: #ff5e6c;
`

const basePath = nextConfig.basePath ?? ''

export default function Title() {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Image
        src={`${basePath}/images/raws/title5.png`}
        alt="title"
        width={430}
        height={645}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <Overlay>
        <AnekBangla>YOU&apos;RE INVITED TO</AnekBangla>
        <BrownhillScript>Our Wedding Day</BrownhillScript>
      </Overlay>
    </Wrapper>
  )
}
