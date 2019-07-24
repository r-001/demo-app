import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


class Viewcotegory extends React.Component{
    render(){
        return(
            <div className="container">
                <div className='row'>
                    <h1>Beneficiary Details</h1>
                    <br/>
                    <table className='table table-striped table-primary '> 
                        <thead>
                            <tr>
                                <th> Name</th>
                                <th> AccountNumber  </th>
                                <th>bankname</th>
                                <th>IFSC</th>
                                  

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ruchir Singh</td>
                                <td>206076543423</td>
                                <td>SBI</td>
                                <td>SBIN0000087</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Viewcotegory;