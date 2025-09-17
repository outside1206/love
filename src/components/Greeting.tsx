import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import nextConfig from '../../next.config'

const Wrapper = styled(motion.div)`
  padding: 40px 0;

  color: #e0e0e0;
`

const Title = styled.div`
  font-family: 'Brownhill Script';
  font-size: 32px;
  color: #ff5e6c;

  margin-bottom: 15px;
`

const Greeting = () => {
  const basePath = nextConfig.basePath ?? ''

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Title>INVITE YOU</Title>
      <Image
        src={`${basePath}/images/raws2/hand-copy-2.png`}
        alt="hand-copy"
        width={300}
        height={360}
      />
    </Wrapper>
  )
}
export default Greeting
