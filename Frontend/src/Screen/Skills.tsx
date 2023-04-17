import React from "react";
import "../Style/Skills.css";

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
    {
      id: 6,
      name: "React",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
    },
    {
      id: 7,
      name: "Bootstrap",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png",
    },
    {
      id: 8,
      name: "Django",
      image:
        "https://raw.githubusercontent.com/github/explore/7456fdff59816d37ef383a6c8f32a26ff7332db2/topics/django/django.png",
    },
    {
      id: 9,
      name: "Flask",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flask/flask.png",
    },
    {
      id: 10,
      name: "Git",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png",
    },
    {
      id: 12,
      name: "Linux",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png",
    },
    {
      id: 13,
      name: "Node Js",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
    },
    {
      id: 14,
      name: "MySql",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png",
    },
    {
      id: 15,
      name: "PostgreSQL",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png",
    },
    {
      id: 16,
      name: "Redux",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png",
    },
    {
      id: 16,
      name: "TypeScript",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
    },
  ];

  return (
    <div id="skills">
      <h2 className="tittle-skills">My skills</h2>
      <div className="row-skills">
        {skills.map((item) => (
          <div className="skill" key={item.id}>
            <img
              src={item.image}
              style={{ width: "100px" }}
              loading="lazy"
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
