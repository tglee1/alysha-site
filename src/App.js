import React, { useState, useEffect } from "react";

function App() {
  const [percent, setPercent] = useState(getPercent());
  const [daysSixty, setDaysSixty] = useState(getDays());
  const [weeksSixty, setWeeksSixty] = useState(getWeeks());
  const [secondsSixty, setSecondsSixty] = useState(getSeconds());
  const [minutesSixty, setMinutesSixty] = useState(getMinutes());
  const [hoursSixty, setHoursSixty] = useState(getHours());

  useEffect(() => {

    // Set up the interval to decrement the time every second (1000ms)
    const interval = setInterval(() => {
      setPercent(getPercent())
      setDaysSixty(getDays());
      setWeeksSixty(getWeeks());
      setSecondsSixty(getSeconds());
      setMinutesSixty(getMinutes());
      setHoursSixty(getHours());
    }, 1000);

    // Cleanup the interval when the component unmounts or timeLeft changes
    return () => clearInterval(interval);
  }, [percent, weeksSixty, daysSixty, secondsSixty,minutesSixty,hoursSixty]);

  return (
    <div className="App">
      <header className="App-header">
        <h1> You're Over Half Way!!!!</h1>
        <p>You are {percent}% towards turning Sixty!</p>
        <p>Weeks to Sixty: {weeksSixty}</p>
        <p>Days to Sixty: {daysSixty}</p>
        <p>Hours to Sixty: {hoursSixty}</p>
        <p>Minutes to Sixty: {minutesSixty}</p>
        <p>Seconds to Sixty: {secondsSixty}</p>
        <p></p>
        <p>You're literally as old as this show btw</p>
        <img src="https://m.media-amazon.com/images/M/MV5BM2MyMTk5NjItZDQzNC00NjA5LTk2MzMtMWQ2ZGI4YjEyZWU0XkEyXkFqcGc@._V1_.jpg" width="250px"></img>
        <p></p>
        <p>Also as old as this</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Jurassic_Park_%28franchise_logo%29.png" width="250px"></img>
        <p></p>
        <p>wait, also this ??????</p>
        <img src="https://m.media-amazon.com/images/M/MV5BNmYxOTAzZWYtOGI3Yi00ODc3LTk5ZjYtZTY0MzVkZTg3YmRiXkEyXkFqcGc@._V1_.jpg" width="250px"></img>
        <p></p>
        <p>this mf died while filming the original crow the same year you were born. Damn you were born before the original crow. That's so old, they're making reboots now....</p>
        <img src="https://i.guim.co.uk/img/media/df1eae763451370b96e87d7fd2d33bdf24f32303/0_0_1163_1573/master/1163.jpg?width=445&dpr=1&s=none" width="250px"></img>
        <p></p>
        <p>I mean...</p>
        <p>It can't get worse than that right...</p>
        <p>....</p>
        <p>right ..?</p>
        <p></p>
        <img src="https://cdn.discordapp.com/attachments/1128031898241867847/1290111338701656087/image.png?ex=66fb4550&is=66f9f3d0&hm=aaefa6a5cf608b26b3059c1239754d11b8cedbfe1b9d6351a2709f29130fda75&" width="250px"></img>
        <p>you're older than the EU ??????</p>
        <p>you really are old.....</p>
        <p>like how are you that old that the EU is younger than you ??????</p>
        <p>Happy Birthday! Hope you feel old :P</p>
      </header>
    </div>
  );
}

function getPercent(){
  const sixty = new Date("Sep 27, 1993 00:00:00");
  const completeMS = new Date().getTime() - sixty;
  const percent = (completeMS / 1893415560000) * 100;
  return percent.toFixed(2);
}

function getDays(){
  const sixty = new Date("Sep 27, 2053 00:00:00");
  const untilSixtyMS = sixty.getTime() - new Date().getTime();
  const daysUntilSixtyMS = Math.floor(untilSixtyMS / (1000 * 60 * 60 * 24));
  return daysUntilSixtyMS + 1;
}

function getWeeks(){
  const sixty = new Date("Sep 27, 2053 00:00:00");
  const untilSixtyMS = sixty.getTime() - new Date().getTime();
  const daysUntilSixtyMS = Math.floor(untilSixtyMS / (1000 * 60 * 60 * 24 * 7));
  return daysUntilSixtyMS + 1;
}

function getSeconds(){
  const sixty = new Date("Sep 27, 2053 00:00:00");
  const untilSixtyMS = sixty.getTime() - new Date().getTime();
  const daysUntilSixtyMS = Math.floor(untilSixtyMS / 1000);
  return daysUntilSixtyMS + 1;
}

function getMinutes(){
  const sixty = new Date("Sep 27, 2053 00:00:00");
  const untilSixtyMS = sixty.getTime() - new Date().getTime();
  const daysUntilSixtyMS = Math.floor(untilSixtyMS / (1000 * 60));
  return daysUntilSixtyMS + 1;
}

function getHours(){
  const sixty = new Date("Sep 27, 2053 00:00:00");
  const untilSixtyMS = sixty.getTime() - new Date().getTime();
  const daysUntilSixtyMS = Math.floor(untilSixtyMS / (1000 * 60 * 60));
  return daysUntilSixtyMS + 1;
}

export default App;
