import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  padding-top: 40px;

  color: #e0e0e0;
`

const Title = styled.div`
  font-family: 'Brownhill Script';
  font-size: 36px;
  color: #ff5e6c;

  margin-bottom: 15px;
`

const Body = styled.div`
  font-size: 18px;
`

const Summary = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Title>SAVE THE DATE</Title>
      <Body>2025.11.22 SAT 1PM</Body>
      <Body>L65호텔웨딩컨벤션 컨벤션홀</Body>
      <Body>서울 동대문구 왕산로 200 SKY-L65 랜드마크타워 6F</Body>
    </Wrapper>
  )
}

export default Summary
