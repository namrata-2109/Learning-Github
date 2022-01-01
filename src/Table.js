import React from 'react'
import "./Table.css";

const Table = ({countryList}) => {
    return (
        <div className='table'>
            {countryList.map(country => (
                <tr>
                    <td>
                        {country.country}
                    </td>
                    <td>
                        {country.cases}
                    </td>
                </tr>
            ))}

        </div>
    )
}

export default Table
