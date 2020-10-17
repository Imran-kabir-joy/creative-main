import React from 'react';

const AllOrderList = ({orderList}) => {

    const { name, email, service, projectDetails } = orderList;
    return (
        <div>
        <table className="table table-hover bg-white">
            <tbody>
                <tr>
                    <th>{name}</th>
                    <td>{email}</td>
                    <td>Service:{service}</td>
                    <td>Details:{projectDetails}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default AllOrderList;