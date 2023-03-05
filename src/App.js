
import './App.css';

function App() {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours()  >= 6 && time.getHours() <=11;
  let dayMessage;

  if (day.toLowerCase() === "monday") {
    dayMessage = `Booooo! It's ${day}`;
  } else if (day.toLowerCase() === "tuesday") {
    dayMessage = `${day}, four days to go...`;
  } else if (day.toLowerCase() === "wednesday") {
    dayMessage = `It's ${day}. We're half way there!`;
  } else if (day.toLowerCase() === "thursday") {
    dayMessage = `${day}, time to start planning out 
    this weekend!`;
  } else if (day.toLowerCase() === "friday") {
    dayMessage = `${day}!!! Let's get through it and 
    start this weekend!`;
  } else if (day.toLowerCase() === "saturday") {
    dayMessage = `It's ${day}! 24 hours of "play-time"!`;
  } else {
    dayMessage = `Oh, boy... ${day}'s here, y'all. Get 
    the last of your fun in and get some rest. We'll 
    have to do this all over again, tomorrow.`
  };

  // console.log("TODAY'S DAY, DATE, TIME AND TIME-ZONE: ", time)
  // console.log("DAY: ", day);
  // console.log("HOUR OF THE DAY: ",time.getHours());

  return (
    <div className="App">
      <h1>{dayMessage}</h1>
      {morning ? <h2>Did you get to eat breakfast, yet?</h2>: ""}
    </div>
  );
};

export default App;
