import Layout from '../../components/layout'
import { getAllCountriesIds, getCountryData } from '../../lib/countries'

export default function Countries({ CountriesData }) {
  return (
    <Layout>
      {CountriesData.timezoneCode}
      <br />
      {CountriesData.id}
      <br />
      {CountriesData.timezoneName}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllCountriesIds()
  console.log("🚀 ~ file: [id].js ~ line 18 ~ getStaticPaths ~ paths", paths)
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const CountriesData = getCountryData(params.id)
  return {
    props: {
      CountriesData
    }
  }
}