import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { randomUUID } from 'crypto'
import { timezoneData } from '../countries/timezone';
import { fixedEncodeURIComponent } from '../utils/encodeUrl'


const countriesDirectory = path.join(process.cwd(), 'countries')
const fileName = 'moment-timezone.txt'
const fullPath = path.join(countriesDirectory, fileName)
const fileContents = fs.readFileSync(fullPath, 'utf8')

const timezoneExtractedArray = fileContents.split('\n')

export function getAllCountriesIds() {
  // Read markdown file as string
  return timezoneExtractedArray.map((item) => {
    console.log("🚀 ~ file: countries.js ~ line 19 ~ returnfileContents.split ~ fixedEncodeURIComponent(item)", fixedEncodeURIComponent(item))
    return {
      params: { id: fixedEncodeURIComponent(item) }
    }
  })
}

export function getCountryData(id) {
  console.log("🚀 ~ file: countries.js ~ line 27 ~ getCountryData ~ id", id)
  const timezoneCode = decodeURIComponent(id)
  console.log("🚀 ~ file: countries.js ~ line 29 ~ getCountryData ~ timezoneCode", timezoneCode)
  console.log('timezoneExtractedArray.find(item => item?.timezonCode === timezoneCode)', timezoneExtractedArray.find(item => item?.timezonCode === timezoneCode))
  console.log("🚀 ~ file: countries.js ~ line 31 ~ getCountryData ~ timezoneExtractedArray", timezoneExtractedArray)
  return {
    id,
    data: timezoneExtractedArray.find(item => item?.timezonCode === timezoneCode)
  }
}

export function getCountriesData() {
  return timezoneExtractedArray.map(item => {
    return {
      id: fixedEncodeURIComponent(item.id), timezoneCode: item
    }
  })
}