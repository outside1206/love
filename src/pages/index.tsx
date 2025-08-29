import Attendance from '@/components/Attendance'
import Gallery from '@/components/Gallery'
import Greeting from '@/components/Greeting'
import Location from '@/components/Location'
import Schedule from '@/components/Schedule'
import Summary from '@/components/Summary'
import Title from '@/components/Title'
import styled from '@emotion/styled'

const Page = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 430px;
  position: relative;
  padding-bottom: 0;
  box-shadow: 0px 0px 18px rgb(0 0 0 / 10%);
  transition: filter 1s ease-out 0s;

  background-color: black;
`

const Home = () => {
  return (
    <Page>
      <Title />
      <Summary />
      <Greeting />
      <Gallery />
      <Schedule />
      <Location />
      <Attendance />
    </Page>
  )
}

export default Home
