import React from 'react';

// Apollo
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


const COUNTRIES_LIST = gql`
{
    countries {
        name
    }
}
`
function FilterByCountry(props: any) {
    const { loading, error, data } = useQuery(COUNTRIES_LIST);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.countries.map((country: any, i: any )=>
            <div className="filterCountries" key={i}>
                <label>
                    <input
                        type="radio"
                        name="country"
                        id={country.name}
                        checked={country.name === props.selected}
                        onChange={props.onChange}
                        value={country.name}/>
                {country.name}</label>
            </div>
        )
}




export default FilterByCountry;