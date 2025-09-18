import styled from '@emotion/styled'
import AccountData from './public/AccountData'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  font-family: 'Anek Bangla';

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
          accountNumber="778 02 396536"
          accountHolder="윤춘화"
        />
        <AccountData
          bankName="농협"
          accountNumber="352 0300 6988 43"
          accountHolder="변상현"
        />
        <AccountData
          bankName="토스"
          accountNumber="1000 4685 4862"
          accountHolder="변상현"
        />
      </AccountList>
      <Side>신부측 계좌번호</Side>
      <AccountList>
        <AccountData
          bankName="국민"
          accountNumber="044 21 1103 807"
          accountHolder="유경석"
        />
        <AccountData
          bankName="신한"
          accountNumber="110 224 000466"
          accountHolder="이주희"
        />
        <AccountData
          bankName="하나"
          accountNumber="37191062547107"
          accountHolder="유가연"
        />
      </AccountList>
    </Wrapper>
  )
}

export default Account
