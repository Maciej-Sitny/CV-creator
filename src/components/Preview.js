import React from 'react';

export default function Preview(){



        return (
            <div>
                <h1>{document.getElementById('firstName').value}</h1>
                <h1>{document.getElementById('lastName').value}</h1>
                <h2>{document.getElementById('address').value}</h2>

            </div>
        )
}

