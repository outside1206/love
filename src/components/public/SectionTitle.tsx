import styled from '@emotion/styled'

const Wrapper = styled.div`
  font-family: 'Anek Bangla Expanded';
  font-weight: 500;

  font-size: 20px;
  color: #ff5e6c;

  margin-bottom: 15px;
`

const SectionTitle = ({ children }: { children?: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>
}

export default SectionTitle
