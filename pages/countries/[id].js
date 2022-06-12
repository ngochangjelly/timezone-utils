import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { getAllCountriesIds } from '../../lib/countries'
import moment from 'moment-timezone'
import ClickToCopyInput from '../../components/CopiedInput'

export default function Countries({ CountryData }) {
  const { id } = CountryData || {}
  const [time, setTime] = useState(moment());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  })
  return (
    <Layout>
      <div>{moment.tz.guess()}</div>
      <div>{moment.tz(time, moment.tz.guess()).format('DD/MM/YYYY HH:mm')}</div>
      {id}
      <ClickToCopyInput text={moment.tz(time, id).format('DD/MM/YYYY HH:mm')} />
      <ClickToCopyInput text={moment.tz(time, id).format('dddd')} />
      <ClickToCopyInput text={moment.tz(time, id).unix()} isBold={true} suffix={'seconds since jan 01 1970. (utc)'} />
      <br />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllCountriesIds()
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      CountryData: { id: params.id }
    }
  }
}