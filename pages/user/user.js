export default (userId) => {
  const content = document.querySelector(".content");

  fetch("./pages/user/user.html")
    .then((response) => response.text())
    .then((userHtml) => {
      content.innerHTML = userHtml;

      const h2 = document.querySelector("h2");
      h2.innerText = `${userId}'s user page`;
    });
};
