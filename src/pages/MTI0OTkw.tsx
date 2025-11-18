import Account from '@/components/Account'
import Attendance from '@/components/Attendance'
import Gallery from '@/components/Gallery'
import Greeting from '@/components/Greeting'
import Location from '@/components/Location'
import Notice from '@/components/Notice'
import Page from '@/components/public/Page'
import Schedule from '@/components/Schedule'
import Share from '@/components/Share'
import Summary from '@/components/Summary'
import Tip from '@/components/Tip'
import Title from '@/components/Title'

const Home3 = () => {
  return (
    <Page>
      {(templateId) => (
        <>
          <Title />
          <Summary />
          <Notice />
          <Tip />
          <Location mapType="naver" />
          <Schedule visibleDday />
          <Attendance />
          <Greeting visibleRelation />
          <Gallery />
          <Account />
          <Share templateId={templateId} />
        </>
      )}
    </Page>
  )
}

export default Home3
