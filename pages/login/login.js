export default () => {
  const content = document.querySelector(".content");

  return fetch("./pages/login/login.html")
    .then((response) => response.text())
    .then((loginHtml) => {
      content.innerHTML = loginHtml;

      const form = document.querySelector("form");
      form.addEventListener("click", (event) => {
        event.preventDefault();

        const username = form.querySelector("input.username").value;
        const password = form.querySelector("input.password").value;

        console.log(username, password);
      });
    });
};
