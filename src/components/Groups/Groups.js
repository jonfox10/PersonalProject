import React from 'react'; 


function Groups(){
    const tableStyle = {
        border: '1px solid black', 
        padding: '15px',
        textAlign: 'left',
        borderSpacing: '5px',
        
     }
        
    return(
        <div>

            Groups Component
            <table 
            style={tableStyle}>
                <tr
                style={tableStyle}>
                    <th style={tableStyle}>GROUP</th>
                    <th style={tableStyle}>GROUP LEADER</th>
                    <th style={tableStyle}>LEADER EMAIL</th>
                    <th style={tableStyle}>LEADER PHONE</th>
                    <th style={tableStyle}>GROUP SIZE</th>
                </tr>
                <tr
                style={tableStyle}>
                    <td style={tableStyle}>Dunder Miflin</td>
                    <td style={tableStyle}>Michael Scott</td>
                    <td style={tableStyle}>mscott@df.email</td>
                    <td style={tableStyle}>555-555-5555</td>
                    <td style={tableStyle}>15</td>
                </tr>

            </table>


        </div>
    )
}

export default Groups; 