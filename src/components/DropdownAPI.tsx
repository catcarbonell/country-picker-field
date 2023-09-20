import { useState, useEffect } from 'react';
import { useFieldPlugin } from "@storyblok/field-plugin/react"

export default function DropdownAPI(){
    const countriesAPI = "https://restcountries.com/v3.1/all"
    const [countries, setCountries] = useState([])
    const fetchCountryName = async () => {
        const res = await fetch(countriesAPI)
        const countries = await res.json()
        setCountries(countries)
   }
    useEffect( () => {
      fetchCountryName()
    }, [])

    const {
        data,
        actions: { setContent },
      } = useFieldPlugin()
    
    return(
        <select name="countries" id="countries" onChange={(e)=>{ setContent(e.target.value)}}>
            { countries.map(({name: {common}}) => {
                return(
                    <option value={common}>{common}</option>
                )}) 
            }
        </select>
    )
}