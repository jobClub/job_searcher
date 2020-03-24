import React from 'react';
import './App.css';

// Components
import JobsList from './components/jobs_list'
import Searcher from './components/searcher'
import FilterByCountry from './components/filterByCountry'
import FilterByCompany from './components/filterByCompany'
class App extends React.Component {
    state = {
        term:'',
        country: '',
        company: ''
    };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
                [e.target.name]: e.target.value
        });
    };
    resetFilters = () => {
        this.setState({
            country: '',
            company: ''
        })
    }

    render() {
        return (
            <div className="page">
                <div className="header"></div>
                <div className="header_cover"></div>
                <div className="container">
                    <Searcher
                        onChange={this.handleChange}
                        termValue={this.state.term} />
                    <div className="content">
                        <div className="filters">
                            <div className="filters_title">
                                <span>Filtros</span>
                                <div>
                                    <input type="button" onClick={this.resetFilters} value="Resear filtros" />
                                </div>
                            </div>
                            <div className="filterParam">
                                <div className="filterParam_title">
                                    <span>Pais</span>
                                </div>
                                <div className="filterParam_content">
                                    <FilterByCountry onChange={this.handleChange} selected={this.state.country} />
                                </div>
                            </div>
                            <div className="filterParam">
                                <div className="filterParam_title">
                                    <span>Compañía</span>
                                </div>
                                <div className="filterParam_content">
                                    <FilterByCompany onChange={this.handleChange} selected={this.state.company} />
                                </div>
                            </div>
                        </div>
                        <div className="listJobs">
                            <JobsList
                                term={this.state.term}
                                country={this.state.country}
                                company={this.state.company} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
