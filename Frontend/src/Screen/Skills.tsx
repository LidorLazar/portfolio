import React from "react";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "CSS",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
    },
    {
      id: 2,
      name: "Python",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
    },
    {
      id: 3,
      name: "Java Script",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
    {
      id: 4,
      name: "HTML",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
    },
    {
      id: 5,
      name: "Mongo",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
    },
  ];

  return (
    <div>
      <div>
        {skills.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2> <br /> <img src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
