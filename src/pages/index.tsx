import Attendance from '@/components/Attendance'
import Gallery from '@/components/Gallery'
import Greeting from '@/components/Greeting'
import Location from '@/components/Location'
import Schedule from '@/components/Schedule'
import Thumbnail from '@/components/Thumbnail'
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
      <Thumbnail />
      <Greeting />
      <Schedule />
      <Gallery />
      <Location />
      <Attendance />
    </Page>
  )
}

export default Home
