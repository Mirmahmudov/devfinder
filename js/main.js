const form = document.querySelector("form");
const input = document.querySelector("input");
const loader = document.querySelector(".loader");
const cards = document.querySelector(".cards");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const api_link = `https://api.github.com/users/${input.value}`;
  getData(api_link);
  input.value = "";
});

const getData = async (api) => {
  loader.classList.add("start");
  const req = await fetch(api);
  const data = await req.json();
  loader.classList.remove("start");
  useData(data);
};

const useData = (data) => {
  console.log(data);
  cards.innerHTML = `
    <div class="card">
    <img src="${data.avatar_url}" alt="" />

    <div class="data">
      <div class="names">
        <div class="name">
          <h2>${data.name}</h2>
          <a href=" https://github.com/${data.login}" target="_blank">@${
    data.login
  }</a>

          <b</b>
        </div>
        <div class="time">
          <p>${data.created_at.slice(0, 10)}</p>
        </div>
      </div>

      <div class="profile">${
        data.bio ? data.bio.slice(0, 50) : "Not Available"
      }</div>
    </div>
  </div>
  <div class="boxs">
    <div class="box">
      <span>
        <h5>Repos</h5>
        <h4>${data.public_repos}</h4>
      </span>
      <span>
        <h5>Followers</h5>
        <h4>${data.followers}</h4>
      </span>
      <span>
        <h5>Following</h5>
        <h4>${data.following}</h4>
      </span>
    </div>
    <div class="boxFooter">
    
      
      <a href="https://www.google.com/maps/@40.370176,71.7750272,14z?entry=ttu ${
        data.location
      } "><i class="fa-solid fa-location-dot"></i>    ${
    data.location ? data.location : "Not Available"
  } </a>

  <a href="" target="_blank"
  ><i class="fa-brands fa-twitter"></i> ${
    data.twitter_username ? data.twitter_username(0, 20) : "Not Available"
  }</a
>
<a href="${data.blog}" target="_blank"
><i class="fa-solid fa-link"></i> ${
    data.blog ? data.blog.slice(0, 20) : "Not Available"
  }</a
>
<a href="#"
><i class="fa-solid fa-hospital"></i>${
    data.company ? data.company.slice(0, 15) : "Not Available"
  }</a
>
    </div>
  </div>
    `;
};

const mode = document.querySelector(".mode");
const body = document.querySelector("body");

var modes = localStorage.getItem("modes")
  ? localStorage.getItem("modes")
  : "light";

mode.addEventListener("click", () => {
  if (modes == "night") {
    localStorage.setItem("modes", "light");
    modes = localStorage.getItem("modes");
    changeMode();
  } else {
    localStorage.setItem("modes", "night");
    modes = localStorage.getItem("modes");
    changeMode();
  }
});

const changeMode = () => {
  if (modes == "night") {
    body.classList.add("active");
  } else {
    body.classList.remove("active");
  }
};

changeMode();

// localStorage.clear()
