import styled from '@emotion/styled'
import { motion } from 'framer-motion'
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
  const sizes = '(max-width: 430px) 100vw, 430px'
  console.log(`${basePath}/images/converted/title-430.webp 430w`)

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <picture>
        <source
          type="image/avif"
          srcSet={[
            `${basePath}/images/converted/title-430.avif 430w`,
            `${basePath}/images/converted/title-860.avif 860w`,
            `${basePath}/images/converted/title-1290.avif 1290w`,
            `${basePath}/images/converted/title-1625.avif 1625w`,
          ].join(', ')}
          sizes={sizes}
        />
        <source
          type="image/webp"
          srcSet={[
            `${basePath}/images/converted/title-430.webp 430w`,
            `${basePath}/images/converted/title-860.webp 860w`,
            `${basePath}/images/converted/title-1290.webp 1290w`,
            `${basePath}/images/converted/title-1625.webp 1625w`,
          ].join(', ')}
          sizes={sizes}
        />

        <img
          src={`${basePath}/images/raws/title.jpeg`}
          alt="title"
          width={430}
          height={645}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </picture>
    </Wrapper>
  )
}
