import Account from '@/components/Account'
import Attendance from '@/components/Attendance'
import Gallery from '@/components/Gallery'
import Greeting from '@/components/Greeting'
import Location from '@/components/Location'
import Page from '@/components/public/Page'
import Schedule from '@/components/Schedule'
import Share from '@/components/Share'
import Summary from '@/components/Summary'
import Title from '@/components/Title'

const Home2 = () => {
  return (
    <Page>
      {(templateId) => (
        <>
          <Title />
          <Summary />
          <Greeting visibleRelation up />
          <Gallery />
          <Schedule visibleDday />
          <Location mapType="naver" />
          <Attendance />
          <Account />
          <Share templateId={templateId} />
        </>
      )}
    </Page>
  )
}

export default Home2
