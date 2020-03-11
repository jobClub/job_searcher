import React from 'react';


function Searcher(props: any) {
        return (
            <div className="search">
                <input
                    className="input"
                    onChange={props.onChange}
                    type="text"
                    name="term"
                    value={props.termValue}
                    placeholder="Encuentra tu trabajo ideal"
                    autoFocus
                    />
            </div>
        )
}
export default Searcher;
