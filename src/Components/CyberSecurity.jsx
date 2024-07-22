import Card from "./Card";


function CyberSecurity() {
  let csContent = [
    {
      id: 1,
      title:
        "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      
    },
    {
      id: 2,
      title: "What Is Hacking? Types of Hacking & More",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      
    },
    {
      id: 3,
      title:
        "The Ultimate Cybersecurity Roadmap for Beginners",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {csContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

export default CyberSecurity