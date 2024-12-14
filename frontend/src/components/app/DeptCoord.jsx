import React from "react";
import details from "../../data/coordinators"

function Coordinators() {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Contact no.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((detail, index)=> (
                            <tr key={detail.id}>
                                <th>{index+1}</th>
                                <td>{detail.name}</td>
                                <td>{detail.dept}</td>
                                <td>{detail.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Coordinators