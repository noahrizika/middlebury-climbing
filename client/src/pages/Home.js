import React from "react";

const Home = () => {
    return (
        <div className="home-main-text">
            <div className="row">
                <div className="left-column">
                    <h1 className='border'>Welcome!</h1>
                </div>
                <div className="left-column">
                        <p className='border'>Welcome to our college climbing club, where adventure awaits and friendships are forged on the wall! We are a vibrant community of climbers, both novice and experienced, who come together to embrace the thrill of scaling new heights and the joy of connecting with fellow enthusiasts. Whether you're a seasoned climber seeking a challenge or a newcomer eager to learn the ropes, our club offers a welcoming environment where everyone is encouraged to push their limits and support one another along the way. Join us at our on-campus climbing wall for exhilarating climbs, laughter-filled belays, and the chance to meet like-minded individuals who share your passion for adventure and fun. Whether you're aiming for the summit or simply looking to enjoy the journey, our club is the perfect place to find camaraderie and excitement in every ascent.</p>
                        <br /><br />
                        <h1 className='border'>What We Do</h1>
                        <p className='border'>The College Climbing Club at Burlington is a dynamic community for both novice climbers and seasoned enthusiasts alike. With a passion for adventure and a love for the sport, the club organizes regular trips to the local climbing gym, generously providing free passes to its members. These outings offer not only a chance to hone skills and conquer new routes but also foster camaraderie among climbers. Moreover, the club hosts informative clinics on belaying and sport climbing, ensuring safety and proficiency among its members. For those seeking a competitive edge, the club organizes thrilling on-campus climbing competitions, where climbers can showcase their skills and push their limits in a supportive environment. Whether scaling towering walls or cheering on fellow climbers, the College Climbing Club is the ultimate destination for climbing enthusiasts at Burlington.</p>
                        <br /><br />
                </div>
                <div className="right-column">
                        <h3 className='border'>Directions to the Wall:</h3>
                        <p className='border'>Starting in the entrance to the athletic center, walk towards the weightlifting gym. At its entrance, turn left and walk down the hallway, keeping the basketball gym on your left. Open the door in front of you, walk to the other side of the room, go through the door on your right and head down the staircase. Turn right and enter the tennis courts on your right. Walk on to the first tennis court and look up and behind you!</p>
                        <br />
                        <h3 className='border'>Wall Hours</h3>
                        <p className='border'>Sunday: 3-8pm, Monday: 3-8pm, Tuesday: 2-8pm, Wednesday: 4-8pm, Thursday: 2-8pm, Friday: 1-5pm, Saturday: Closed</p>
                        <br />
                        <h3 className='border'>Designated Hours</h3>
                        <p className='border'>Women/NonBinary: Tuesday 6-8pm <br />BIPOC: Thursday 6-8pm <br />Setting Climbs: Saturday 1-4pm</p>
                        <br />
                        <h3 className='border'>Join Our <a id="link" className='border' href="https://groupme.com/join_group/49649037/zrTVegsN" target="_blank" rel="noopener noreferrer">GroupMe</a> and <br className='border' /><a id="link" className='border' href="https://outlook.office365.com/owa/climbclub@middleburycollege.onmicrosoft.com/groupsubscription.ashx?action=join&source=MSExchange/LokiServer&guid=3ed0193b-ffee-4366-88df-b0eb3ddfbfe6" target="_blank" rel="noopener noreferrer">Email List</a>!</h3>
                        <br />
                </div>
            </div>
            <br />
            <img src={require("../images/setting.jpeg")} alt="setting" />
            <img src={require("../images/comp-crowd.jpeg")} alt="crowd at comp" />
        </div>

    );
}
 
export default Home;