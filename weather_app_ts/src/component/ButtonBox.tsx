import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonBox = ({ cities, setCity }: { cities: any; setCity: any }) => {
  // console.log(cities);
  return (
    <div>
      <Button variant='warning'>Current Location</Button>
      {/* <Button variant='warning'>paris</Button>
      <Button variant='warning'>new york</Button> */}
      {cities.map((item: any) => (
        // console.log(item) // paris, new york, tokyo, seoul
        <Button variant='warning' onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default ButtonBox;
