import Account from '@/components/Account'
import Attendance from '@/components/Attendance'
import Greeting from '@/components/Greeting'
import JejuGallery from '@/components/JejuGallery'
import Location from '@/components/Location'
import Schedule from '@/components/Schedule'
import Share from '@/components/Share'
import StudioGallery from '@/components/StudioGallery'
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
      <Schedule />
      <Greeting />
      <JejuGallery />
      <StudioGallery />
      <Attendance />
      <Location />
      <Account />
      <Share />
    </Page>
  )
}

export default Home
