let servicesData = [
  {
    image: "assets/web_dev.jpg",
    title: "Website-Development",
    description:"It encompasses both front-end (what users see and interact with, built with HTML, CSS, and JavaScript) and back-end (the behind the scenes server-side functionality) development. Key aspects include planning, user interface/user experience (UI/UX) design, programming, and rigorous testing for functionality, performance, security, and compatibility across devices"
   },
  {
    image: "assets/itc_ser.jpg",
    title: "IT consulting",
    description: "Strategic IT Consulting: Empowering Your Business for Growth Don't just keep up with technology—get ahead of it. Our expert IT consultants partner with you to align your technology roadmap with your core business objectives. We help you navigate complextechnological landscapes, identify growth opportunities, and implement scalable, secure, andcost-effective solutions." 
  },
 
  {
    image: "assets/cs_serv.jpg",
    title: "Cybersecurity",
    description: " We protecting digital assets—including computer systems, networks, devices, and data—from digital attacks, damage, or unauthorized access, aiming to ensure their confidentiality, integrity, and availability "
  },
  {
    image: "assets/c_serv.jpg",
    title: "Cloud-Services",
    description:  "Our cloud service modelsWe offer the main types of cloud computing models to fit your business's needs, from basic infrastructure to fully managed applications."
  },
  {
    image: "assets/ts_serv.jpg",
    title: "Technical-Support",
    description: "Expert Technical Support, When You Need It. Our dedicated technical support team ensures your IT infrastructure and systems operate seamlessly.We provide prompt and professional assistance to resolve issues, minimize downtime, and keep your"

   },
 
  
];

serviceContainer.innerHTML = servicesData.map(service => `
  <div class="service">
    <div class="service-image">
      <img src="${service.image}" alt="Service Image">
    </div>
    <div class="service-content">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  </div>
`).join("");

