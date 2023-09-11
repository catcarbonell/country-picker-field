import Countries from "../countries.json"
import { useFieldPlugin } from "@storyblok/field-plugin/react"

export default function Dropdown(){
    const {
        data,
        actions: { setContent },
      } = useFieldPlugin()
    
    return(
        <select name="countries" id="countries" onChange={(e)=>{ setContent(e.target.value)}}>
            { Countries.map( country => {
                    return(
                        <option value={country.name}>{country.name}</option>
                    )
                }) 
            }
        </select>
    )
}