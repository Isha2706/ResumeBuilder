import React from 'react';

const Summary = ({summaryData}) => {
  const data = summaryData; //data = ""
  return (
    <section>
      <h3>Summary</h3>
      
      <p className="para">
        {data}
      </p>
    </section>
  );
};

export default Summary;
