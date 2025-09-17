import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useState } from 'react'
import AttendanceModal from './AttendanceModal'

const Wrapper = styled(motion.div)`
  font-family: 'Anek Bangla';
  color: #4e4c4b;

  padding-top: 40px;
`

const Title = styled.div`
  font-size: 20px;
  color: #e0e0e0;

  margin-bottom: 10px;
`

const Body = styled.div`
  color: #b0b0b0;

  margin-bottom: 20px;
`

const Text = styled.div`
  margin: 3px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 13px 0;
  margin: 0 100px;

  background-color: #ff9aa5;

  border-width: 0px;
  border-radius: 32px;
  border: none;

  color: #efefef;

  :enabled:active {
    opacity: 0.8 !important;
    transform: scale(0.98) !important;
  }
`

const Attendance = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Title>참석 여부를 전달해주세요</Title>
      <Body>
        <Text>결혼식 참석 전 참석여부를 응답해주시면</Text>
        <Text>결혼식 준비에 있어 큰 도움이 됩니다.</Text>
        <Text>한 분 한 분 더욱 귀하게 모실 수 있도록</Text>
        <Text>아래 버튼을 클릭하여 참석여부를</Text>
        <Text>전달 부탁드립니다.</Text>
      </Body>
      <ButtonWrapper>
        <Button
          onClick={() => {
            setOpen(true)
          }}
        >
          참석여부 전달하기
        </Button>
      </ButtonWrapper>
      {open && <AttendanceModal open={open} onClose={() => setOpen(false)} />}
    </Wrapper>
  )
}

export default Attendance
