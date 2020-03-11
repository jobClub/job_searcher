import React from 'react';

// Apollo
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import Moment from 'react-moment';

const ALL_JOBS = gql `
{
    commitments {
        id
        title
        jobs (orderBy: postedAt_DESC){
            title
            slug
            postedAt
            applyUrl
            countries {
                name
            }
            company {
                name
                logoUrl
            }
        }
    }
}
`

function JobsList(props: any) {
    let term:string = props.term;
    const countryFilter = props.country;
    const companyFilter = props.company;
    const { loading, error, data } = useQuery(ALL_JOBS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    let jobsAllData = data.commitments[0].jobs;

    if (term) {
        term = term.toLowerCase();
        const jobsByTerm = jobsAllData
        .filter((job: job) => {
            return job.title.toLowerCase().indexOf(term) >= 0
        })
        jobsAllData = jobsByTerm;
    }


    if (countryFilter) {
        const jobsByCountry = jobsAllData
        .filter((job: job) => {
            for (const country of job.countries) {
                if (country.name === countryFilter) {
                    return job;
                }
            }
        })
        jobsAllData = jobsByCountry;
    }

    if (companyFilter) {
        const jobsByCompany = jobsAllData
            .filter((job: job) => {
                if (job.company) {
                    if (job.company.name === companyFilter) {
                        return job.company.name = companyFilter
                    }
                }
            })
        jobsAllData = jobsByCompany;
    }

    return (
        jobsAllData.map((job: job, i: any) => {
            return (
                <div key={i} className="job">
                    <div className="jobImg">
                        {
                            job.company ?
                                job.company.logoUrl ?
                                    <img src={job.company.logoUrl} alt="Company logo" />
                                    :
                                    <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBMht4E.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f" alt="Company logo 1" />
                                :
                                <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBMht4E.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f" alt="Company logo 2" />

                        }
                    </div>
                    <div className="jobContent">
                        <div className="topContent">
                            <div>
                                <h2>{job.title}</h2>
                            </div>
                            <span>Publicado: <Moment format="DD/MM/YYYY">{job.postedAt}</Moment></span>
                        </div>
                        {
                            job.company?
                            <span>{job.company.name}</span>
                            :
                            <span>{job.slug}</span>
                        }
                        <div className="bottomContent">
                            <a href={job.applyUrl} target="_blank" className="button">Ver</a>
                        </div>
                    </div>
                </div>
            )
        }
        )
    )
}

interface job {
    title: string,
    slug: string
    postedAt: Date,
    applyUrl: string,
    countries: [{
        name: string
    }],
    company: {
        name: string,
        logoUrl: string
    }
}

export default JobsList;