import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import nextConfig from '../../next.config'

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  /* 비율 고정으로 CLS 방지 (가로/세로) */
  aspect-ratio: 1625 / 2438;
  max-width: 430px; /* Page가 이미 430px이면 없어도 OK */
  margin: 0 auto;
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
        src={`${basePath}/images/raws/title.png`}
        alt="title"
        width={430}
        height={645}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </Wrapper>
  )
}
