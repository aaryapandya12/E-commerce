import React from 'react'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Banner from '../components/Banner'
import Circle from '../components/Circle'

const Home = () => {
  return (
    <div>
        <Circle/>
        <Banner/>
        <LatestCollection />
        <BestSeller/>
        <OurPolicy/>
        <NewsletterBox/>
    </div>
  )
}

export default Home