import React from 'react'
import CareerHistory from './../components/careerHistory/CareerHistory';


export default function InfoPage() {
  return (
    <div className="content">
            
            <div className="mb-3">
              <h1 className="mainTitle ">درباره من</h1>
              <h4 className="mainDes">
                سلام!!!
                <br/>
                ابوالفضل سعیدآبادی هستم، طراح رابط کاربری وب و موبایل و برنامه نویس فرانت اند در زمینه وب هستم
              </h4>
            </div>
            <div className="mySkills">
              <h2 className="mb-4">سوابق شغلی من</h2>
              
              <CareerHistory/>
            </div>
          </div>
  )
}
