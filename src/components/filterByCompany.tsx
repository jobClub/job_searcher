import React from 'react';

// Apollo
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


const COMPANIES_LIST = gql`
{
    companies {
        name
    }
}
`
function FilterByCountry(props: any) {
    const { loading, error, data } = useQuery(COMPANIES_LIST);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.companies.map((company: any, i: any) =>
        <div className="filterCompanies" key={i}>
            <label>
                <input
                    type="radio"
                    name="company"
                    id={i}
                    onChange={props.onChange}
                    checked={company.name === props.selected}
                    value={company.name} />
                {company.name}</label>
        </div>
    )
}

export default FilterByCountry;