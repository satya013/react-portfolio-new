import mysql from "../assets/png/mysql.jpg";
import ccna from "../assets/png/download.png";
import chegg from "../assets/png/chegg.png";
export const achievementData = {
  bio: "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
  achievements: [
    {
      id: 1,
      title: "MySql cerification",
      details: "Completed course and challenges in MySql Bootcamp course",
      date: "April 16, 2022",
      field: "Database",
      image: mysql,
      url: "https://drive.google.com/file/d/12iYj8FEJWmytSSmOKIAhK2kMQ9KK51Pn/view?usp=drivesdk",
    },
    {
      id: 2,
      title: "CISCO networking Certification",
      details:
        "Completed networking cerification for Introduction to Networks ",
      date: "Jul 04, 2022",
      field: "Networking",
      image: ccna,
      url: "https://drive.google.com/file/d/18ZbyOcQKLSgOc8PmiJVGow42FXPefdBP/view",
    },
    {
      id: 3,
      title: "Subject Matter Expert",
      details:
        "Solved above tons of question in computer science subjects and helped student in their assignment .",
      date: "Sept 20, 2021",
      field: "Freelancer",
      image: chegg,
      url: "https://drive.google.com/file/d/1n_jehGExkzmP782mv4tSPH0-Bk6Gqxn4/view?usp=sharing",
    },
  ],
};

// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/
