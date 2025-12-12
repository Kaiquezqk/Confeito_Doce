// script.js

document.addEventListener("DOMContentLoaded", () => {
  const fileiras = document.querySelectorAll(".fileira"); 
  fileiras.forEach(fileira => {
    const imagens = Array.from(fileira.querySelectorAll("img"));
    let index = 0;

    setInterval(() => {
      
      const primeira = imagens.shift();
      fileira.appendChild(primeira);
      imagens.push(primeira);
    }, 2000); 
  });
});
