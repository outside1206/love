import Attendance from '@/components/Attendance'
import Calendar from '@/components/Calendar'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Location from '@/components/Location'
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

  background-color: white;
`

const Home = () => {
  return (
    <Page>
      <Header />
      <Intro />
      <Calendar />
      <Gallery />
      <Location />
      <Attendance />
    </Page>
  )
}

export default Home
