const createElement = document.createElement("image-figure");

createElement.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
);

createElement.setAttribute("alt", "Dicoding logo");
createElement.setAttribute("caption", "Huruf g di logo dicoding");

document.body.appendChild(createElement);
