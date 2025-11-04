let cardsData = [
  {
    image: "assets/abt_img1.jpg",
    title: "Modern Website Development",
    description: "Explore innovative building designs that combine aesthetics with functionality, bringing modern concepts to life."
  },
  {
    image: "assets/abt_img2.jpg",
    title: "Responsive Web Solutions",
    description: "Build websites that adapt effortlessly to any screen size, ensuring accessibility and performance across all devices."
  },
  {
    image: "assets/abt_img3.jpg",
    title: "Creative UI/UX Design",
    description: "Craft visually stunning and user-friendly interfaces that improve engagement and provide seamless user experiences."
  },
  {
    image: "assets/abt_img3.jpg",
    title: "Creative UI/UX Design",
    description: "Craft visually stunning and user-friendly interfaces that improve engagement and provide seamless user experiences."
  },
  {
    image: "assets/abt_img3.jpg",
    title: "Creative UI/UX Design",
    description: "Craft visually stunning and user-friendly interfaces that improve engagement and provide seamless user experiences."
  }

];

/* let  cardContainer = document.getElementById("cardContainer");

cardContainer.innerHTML = cardsData.map(card => `
  <div class="card">
    <div class="card-image">
      <img src="${card.image}" alt="Project Image">
    </div>
    <div class="card-content">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    </div>
  </div>
`).join("");  */



let cardContainer = document.getElementById("cardContainer");
cardContainer.innerHTML = cardsData.map(card => `
    <div class = "card">
    <div class ="card-image">
    <img src = "${card.image}" alt = "Project Image">
    </div>
    <div class = "card-content">
    <h3> ${card.title}</h3>
    <p> ${card.description}</p>
    </div>
    </div>

    `).join("");




