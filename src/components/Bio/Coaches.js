import React from 'react'
import JoshImg from '../../images/coachjosh.png'
import CrissStanding from '../../images/crissstanding2.jpeg'
import Sammer from '../../images/sammerplaceholder.jpg'

const Coaches = () => {
  return (
    <div className="Bio-home">
        <div className="container Bio-banner">
            <div className="row">
                <div className="col-12 Bio-content">
                    <h1 className="Bio-title coachcontent pb-3">Directors</h1>
                </div>
            </div>
            <div className="row coachBio coachbiodivider pt-3">
                <div className="col-3">
                    <img src={CrissStanding} alt="Coach Criss Rodriguez: Head Coach of Calabasas High School Girls's Tennis Team"/>
                </div>
                <div className="col-9">
                    <h2>Criss Rodriguez : Co-Director</h2>
                    <p>Coach Criss has been coaching professional tennis for 6+ years in Los Angeles, CA. Born and raised in Havana, Cuba; coach Criss was part of the Cuban National Team, where she trained under a rigorous curriculum for top nationally ranked student-athletes and future Federation Cup team members. Coach Criss played college tennis at the Division I level, at California State University Northridge (CSUN). She began coaching High School level tennis for a college-preparatory school (Harvard-Westlake High School), where she coached the team to CIF finals two years in a row. Simultaneously, coach Criss coached junior-players from all levels (beginners to high-performance juniors) privately. Currently, she is the Head coach for the Calabasas High School girls tennis program. She has run junior-camps and clinics in the San Fernando Valley for 6+ years, contributing to the community and helping players improve their skills, she now looks forward to launching her own (and coach Josh’s) camp in the city of Calabasas and helping players in the community enjoy the game of tennis.</p>
                    <ul>
                      <h4>Qualifications</h4>
                      <li>25 years of playing experience</li>
                      <li>9 years of coaching experience</li>
                      <li>Former Division I Player</li>
                      <li>USPTA Certified</li>
                      <li>10 and Under Certified</li>
                      <li>CPR Certified</li>
                      <li>Bilingual-English and Spanish</li>
                    </ul>
                    <ul>
                      <h4>Career Awards</h4>
                      
                    </ul>
                </div>
            </div>
            <div className="row coachBio">
                <div className="col-3">
                    <img src={JoshImg} alt="Coach Josh Wiseman: Head Coach of Calabasas High School Boy's Tennis Team"/>
                </div>
                <div className="col-9">
                    <h2>Josh Wiseman : Co-Director</h2>
                    <p>Coach Josh has been a tennis teaching professional for over 20 years in Southern California. He is currently the Head Coach for the Boy's Tennis Program at Calabasas High School. In addition, he is Co-Director for the Coach Criss & Josh Tennis Camp. Coach Josh has facilitated local high performance tennis academies and also was the tennis coach for Harvard-Westlake Middle School and UCLA tennis camps. One of Coach Josh’s highlights was capturing the 2019 CIF Southern Section title for Calabasas high school boys tennis team. Coach Josh enjoys developing junior tennis players from all levels and has a passion for the sport of tennis.</p>
                    <ul>
                      <h4>Qualifications</h4>
                      <li>35 years playing experience</li>
                      <li>20 years coaching experience</li>
                      <li>Former Division III player </li>
                      <li>CPR/First Aid Certified</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1 className="Bio-title coachcontent pb-3">Performance Coaches</h1>
                </div>
            </div>
            <div className="row coachBio pt-3">
                <div className="col-3">
                    <img src={Sammer} alt="Coach Sammer Aziz"/>
                </div>
                <div className="col-9">
                    <h2>Sammer Aziz</h2>
                    <p>Sammer Aziz began playing tennis at the age of seven when he was introduced to the sport by his dad. His high level of passion for the sport brought him early success being ranked as high as number one in the Caribbean. At twelve years old, Sammer and his family moved to Santa Barbara, California. He continued his junior success in the So Cal region by consistently being a top fifty ranked player. Fast forward a couple years and Sammer is playing varsity tennis for Santa Barbara High School, who at the time had a top ten tennis program in the country. By his sophomore year he was a starter and helped lead the team to a CIF Finals appearance. Some of his junior accolades include a Rose Bowl Title, a top junior ranking of #24, and receiving a scholarship to train at the Sanchez Casal Tennis Academy in Florida. After high school, Sammer pursued his dream of playing professional tennis. He played on the tour for a year and participated in many future and satellite events. Sammer has experience working with people from all ends of the spectrum in terms of age and ability. He’s been a hitting partner for top college players, has trained high school players and enjoys giving lessons to seniors and kids.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coaches
