import React, { useEffect, useState } from 'react'
import CareerItem from './CareerItem'
import axios from 'axios';
export default function CareerHistory() {

    const [careerHistory, setCareerHistory] =useState([])
    // const [loading, setLoading] = useState(true);

    const getAllSkill = () => {
        axios
          .get('https://abolfazl26s.github.io/project_data/data/db.json')
          .then(function (response) {
            // handle success
            setCareerHistory(response.data.myCareerHistory);
            // setLoading(false)

          })
        };
        getAllSkill()
        useEffect(()=>{
            getAllSkill();
        },[])

  return (
    <div className="row justify-content-center">
      {careerHistory.map((careerItem) => (
        <CareerItem key={careerItem.id} careerItems={careerItem} />
      ))}
    </div>
  );
}
