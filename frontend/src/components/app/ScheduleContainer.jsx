import React from "react";
import eventData from "../../../data/eventData";

function Schedule() {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventData.map((event, index)=> (
                            <tr key={event.id}>
                                <th>{index+1}</th>
                                <td>{event.details.name}</td>
                                <td className="font-bold">{event.details.date}</td>
                                <td className="font-bold text-primary">{event.details.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Schedule