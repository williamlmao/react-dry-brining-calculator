
import { Meats } from './Meats'
import { Salts } from './Salts'

export const getMeatCategoryRadios = () => {
  return Object.keys(Meats).map((category)=>{return {name: `${category}`, value:`${category}`}})
}
  
export const getMeatTypeRadios = (meatCategory) => {
  if (meatCategory) {
    return Object.keys(Meats[meatCategory]).map((meat)=>{
      return {name: meat, value: meat, icon: Meats[meatCategory][meat].img}
    })
  }
}

export const getSaltTypeRadios = () => {
  return Object.keys(Salts).map( (salt) => {
    return {name: Salts[salt].name, value: Salts[salt].name, subtext: `${Salts[salt].gramsPerTbsp} g/tbsp`}
  })
}
