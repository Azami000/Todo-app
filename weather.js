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

const getGiphyData = async (searchInput) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=Metric&appid=7c91776fb1267161889e298c3e7ceb4b`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};
console.log(getGiphyData);

const cardCompenent = async (item) => {
  const { icon, city, temperature, day, weather, time } = item;
  const iconImg = iconImgs[icon];
  const background = dayNight(day);

  const data = await getGiphyData(city);

  console.log({ data });

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

const render = (data) => {
  newData.innerHTML = "";

  data.forEach(async (item) => {
    newData.innerHTML += await cardCompenent(item);
  });
};

render(weathers);

// includes keyup

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", async (el) => {
  if (el.key === "Enter") {
    const result = await getGiphyData(searchInput.value);
    console.log(reuslt);
  }
  const tsagagaar={
    city:searchInput.value
    temperature:result.main.temp,
    sky:result.weather[0].main
    icon:
    day:"day"
    time:new Date().toLocaleTimeString(result.sys.country),

}
render(tsagagaar)
//   // const filteredWeathers = weathers.filter((weather) => {
//   //   return weather.city.toLocaleLowerCase().includes(searchInput.value);
//   // });
//   // render(filteredWeathers);
});
