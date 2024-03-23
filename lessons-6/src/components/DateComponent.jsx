import React from 'react';

const DateComponent = ({ date }) => {
    const parsedDate = new Date(date);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const month = monthNames[parsedDate.getMonth()];
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();
    const hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}`;

    return (
        <span>{formattedDate}</span>
    );
}

export default DateComponent;
