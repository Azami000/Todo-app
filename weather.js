const iconImgs = [
  "./rainy-icon.jpg",
  "./snowy-icon.jpg",
  "./cloud-icon.png",
  "./sunny-cloud.jpg",
];

const weathers = [
  {
    city: "New York",
    temperature: 28,
    weather: "Sunny",
    icon: 3,
    day: "day",
    time: new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
    }),
  },
  {
    city: "London",
    temperature: 18,
    weather: "Cloudy",
    icon: 2,
    day: "night",
    time: new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London" }),
  },
  {
    city: "Tokyo",
    temperature: 30,
    weather: "Rainy",
    icon: 1,
    day: "day",
    time: new Date().toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" }),
  },
  {
    city: "Sydney",
    temperature: 22,
    weather: "Partly Cloudy",
    icon: 3,
    day: "day",
    time: new Date().toLocaleTimeString("en-AU", {
      timeZone: "Australia/Sydney",
    }),
  },
  {
    city: "Paris",
    temperature: 25,
    weather: "Clear",
    icon: 3,
    day: "night",
    time: new Date().toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }),
  },
];

const newData = document.getElementById("newData");
const dayNight = (day) => {
  if (day === "day") {
    return "./sky.jpeg";
  } else {
    return "./night-sky.jpg";
  }
};

const cardCompenent = (item) => {
  const { icon, city, temperature, day, weather, time } = item;
  const iconImg = iconImgs[icon];
  const background = dayNight(day);

  return `<div class="cards" style="background-image:url(${background})">
        <div class="card">
          <div class="left">
            <div class="city">
              ${city}
              <div class="temp">${temperature} <sup>0</sup></div>
            </div>
            <div class="time">${time}</div>
          </div>

          <div class="right">
          <div class="weather">${weather}</div>
            <img id="icon" src=${iconImg} alt="" />
          </div>
        </div>
      </div>`;
};

const render = () => {
  weathers.forEach((item) => {
    newData.innerHTML += cardCompenent(item);
  });
};

render();

// includes keyup

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {});
