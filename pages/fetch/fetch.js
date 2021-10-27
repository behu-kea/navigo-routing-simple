export default () => {
  const content = document.querySelector(".content");

  return fetch("./pages/fetch/fetch.html")
    .then((response) => response.text())
    .then((fetchHtml) => {
      content.innerHTML = fetchHtml;

      fetch("http://api.open-notify.org/astros.json")
        .then((response) => response.json())
        .then((astronautsData) => {
          const astronautsUl = document.querySelector("ul.astronauts");
          let astronautsHtml = "";
          astronautsData.people.forEach((astronaut) => {
            astronautsHtml += `<li>${astronaut.name} - ${astronaut.craft}`;
          });
          astronautsUl.innerHTML = astronautsHtml;
        });
    });
};
