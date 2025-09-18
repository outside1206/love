import Account from '@/components/Account'
import Attendance from '@/components/Attendance'
import Greeting from '@/components/Greeting'
import JejuGallery from '@/components/JejuGallery'
import Location from '@/components/Location'
import Page from '@/components/public/Page'
import Schedule from '@/components/Schedule'
import Share from '@/components/Share'
import StudioGallery from '@/components/StudioGallery'
import Title from '@/components/Title'

const Home2 = () => {
  return (
    <Page>
      {(templateId) => (
        <>
          <Title />
          <Greeting />
          <Schedule />
          <JejuGallery />
          <StudioGallery />
          <Attendance />
          <Location />
          <Account />
          <Share templateId={templateId} />
        </>
      )}
    </Page>
  )
}

export default Home2
