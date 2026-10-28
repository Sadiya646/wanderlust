import React from 'react';

const AllDestinationpage = async () => {

const res=await fetch('http://localhost:8000/destinations');
const data=await res.json();
console.log(data);
    return (
        <div>
            alldestinationpage
        </div>
    );
};

export default AllDestinationpage;