import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { randomUUID } from 'crypto'
import { timezoneData } from '../countries/timezone';
const countriesDirectory = path.join(process.cwd(), 'countries')
import { fixedEncodeURIComponent } from '../utils/encodeUrl'


export function getAllCountriesIds() {
  return timezoneData.map((item) => {
    const { timezoneName } = item
    console.log("🚀 ~ file: countries.js ~ line 47 ~ returntimezoneData.map ~ fixedEncodeURIComponent(timezoneName)", fixedEncodeURIComponent(timezoneName))
    return {
      params: { id: fixedEncodeURIComponent(timezoneName) }
    }
  })
}

export function getCountryData(id) {
  const timezoneName = decodeURIComponent(id)
  return {
    id,
    data: timezoneData.find(item => item.timezoneName === timezoneName)
  }
}

export function getCountriesData() {
  return timezoneData.map(item => {
    return {
      id: fixedEncodeURIComponent(item.timezoneName),
      ...item
    }
  })
}