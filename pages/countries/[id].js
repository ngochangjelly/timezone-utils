import Layout from '../../components/layout'
import { getAllCountriesIds, getCountryData } from '../../lib/countries'

export default function Countries({ CountriesData }) {
  return (
    <Layout>
      {CountriesData.title}
      <br />
      {CountriesData.id}
      <br />
      {CountriesData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllCountriesIds()
  return {
    paths,
    fallback: false
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