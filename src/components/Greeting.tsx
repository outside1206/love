import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  padding: 60px 0;

  color: #e0e0e0;

  // border: 1px solid red;
`

const Title = styled.div`
  font-family: 'Brownhill Script';
  font-size: 40px;
  color: #ff5e6c;

  margin-bottom: 20px;
`

const Greeting = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Title>INVITE YOU</Title>
      초대, 인사말, 우리 소개 및 손글씨
    </Wrapper>
  )
}
export default Greeting
