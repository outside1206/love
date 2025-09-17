import styled from '@emotion/styled'
import { FaRegCopy } from 'react-icons/fa'

interface AccountDataProps {
  bankName: string
  accountNumber: string
  accountHolder: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  color: #e0e0e0;
  font-size: 15px;

  // margin: 0 5px;
  // padding-bottom: 10px;
  // margin-bottom: 10px;
  // border-bottom: 1px solid #b0b0b0;
`

const AccountNumberWrapper = styled.div`
  display: flex;
  align-items: center;
`

const BankName = styled.div``

const Divider = styled.div`
  width: 2px;
  height: 10px;
  background-color: #e1e1e1;
  margin: 0 5px;
`

const AccountNumber = styled.div``

const CopyButtonWrapper = styled.div`
  margin-left: auto;
`

const CopyButton = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  color: #333333;
  background-color: white;

  border: 1px solid #e1e1e1;
  border-radius: 4px;
  gap: 5px;

  :enabled:active {
    opacity: 0.8 !important;
    transform: scale(0.98) !important;
  }
`

const AccountName = styled.div`
  text-align: left;
`

const AccountData = ({
  bankName,
  accountNumber,
  accountHolder,
}: AccountDataProps) => {
  return (
    <Wrapper>
      <AccountNumberWrapper>
        <BankName>{bankName}</BankName>
        <Divider />
        <AccountNumber>{accountNumber}</AccountNumber>
        <CopyButtonWrapper>
          <CopyButton
            onClick={() => {
              navigator.clipboard.writeText(`${bankName} ${accountNumber}`)
            }}
          >
            <FaRegCopy />
            복사
          </CopyButton>
        </CopyButtonWrapper>
      </AccountNumberWrapper>
      <AccountName>{accountHolder}</AccountName>
    </Wrapper>
  )
}

export default AccountData
