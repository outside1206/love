import styled from '@emotion/styled'
import AccountData from './public/AccountData'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  padding: 0 20px;
  padding-top: 40px;
`

const Title = styled.div`
  font-size: 20px;
  color: #e0e0e0;

  margin-bottom: 10px;
`

const Side = styled.div`
  font-size: 16px;
  text-align: left;
  color: #e0e0e0;

  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 5px;
  margin-bottom: 20px;
`

const AccountList = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
  padding: 0 5px;

  gap: 15px;
`

const Account = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Title>마음 전하실 곳</Title>
      <Side>신랑측 계좌번호</Side>
      <AccountList>
        <AccountData
          bankName="농협"
          accountNumber="3520300698843"
          accountHolder="변정수"
        />
        <AccountData
          bankName="농협"
          accountNumber="77802396536"
          accountHolder="윤춘화"
        />
        <AccountData
          bankName="카카오뱅크"
          accountNumber="3333043625408"
          accountHolder="변상현"
        />
      </AccountList>
      <Side>신부측 계좌번호</Side>
      <AccountList>
        <AccountData
          bankName="국민"
          accountNumber="044211103807"
          accountHolder="유경석"
        />
        <AccountData
          bankName="신한"
          accountNumber="110224000466"
          accountHolder="이주희"
        />
        <AccountData
          bankName="카카오뱅크"
          accountNumber="3333043271120"
          accountHolder="유가연"
        />
      </AccountList>
    </Wrapper>
  )
}

export default Account
