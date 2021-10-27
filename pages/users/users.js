export default () => {
  const content = document.querySelector(".content");

  return fetch("./pages/users/users.html")
    .then((response) => response.text())
    .then((usersHtml) => {
      content.innerHTML = usersHtml;

      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          const usersUl = document.querySelector("ul.users");
          let usersHtml = "";
          users.forEach((user) => {
            usersHtml += `<li>${user.name} - <a href="/user/${user.id}" data-navigo>link to profile</a>`;
          });
          usersUl.innerHTML = usersHtml;
        });
    });
};
