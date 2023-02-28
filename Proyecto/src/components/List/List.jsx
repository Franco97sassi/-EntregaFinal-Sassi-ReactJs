import React from 'react'

const List = ({productos}) => {
  return (
    <ul>
         <itemListContainer producto={productos[0]}/> 
        <itemListContainer producto={productos[1]}/>  
        <itemListContainer producto={productos[2]}/>  
        <itemListContainer producto={productos[3]}/>  
        <itemListContainer producto={productos[4]}/>    
    </ul>
  );
};

export default List;