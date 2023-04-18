import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonBox = ({
  cities,
  setCity,
}: {
  cities: string[];
  setCity: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <Button variant='warning'>Current Location</Button>
      {cities.map((item: any) => (
        <Button variant='warning' onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default ButtonBox;
