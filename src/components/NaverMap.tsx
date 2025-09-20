import { useEffect, useState } from 'react'
import { Container, Marker, NaverMap, useNavermaps } from 'react-naver-maps'

const NaverMaps = () => {
  const navermaps = useNavermaps()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return
  }

  return (
    <Container
      style={{
        width: '100%',
        height: '325px',
      }}
    >
      <NaverMap
        defaultCenter={new navermaps.LatLng(37.579999, 127.046227)}
        defaultZoom={15}
        scrollWheel={false}
      >
        <Marker defaultPosition={new navermaps.LatLng(37.579999, 127.046227)} />
      </NaverMap>
    </Container>
  )
}

export default NaverMaps
