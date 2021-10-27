export default (userId) => {
  const content = document.querySelector(".content");

  fetch("./pages/user/user.html")
    .then((response) => response.text())
    .then((userHtml) => {
      content.innerHTML = userHtml;

      return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((user) => {
          document.querySelector("h2").innerText = `${user.name}'s user page`;
          document.querySelector("li.phone").innerHTML = user.phone;
          document.querySelector("li.email").innerHTML = user.email;
        });
    });
};
