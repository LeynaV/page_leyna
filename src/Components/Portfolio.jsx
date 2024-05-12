/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Blue Modern Gradient Product Launch Apps Mockup Business Presentation.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "JODDY startups, to empower women, in technical assistance",
    description:
      "To bridge the gender gap in the tech industry by equipping women with the skills and expertise to excel in technical support roles, enabling them to provide exceptional customer service and contribute to the success of businesses worldwide.",
    url: "https://www.facebook.com/leynavarinia.pachecoquisbert/posts/10234333353741535",
  },
  {
    title: "THIRD PLACE in the CODE category of the Build with AI Bolivia Hackathon!",
    description:
      "Artificial Intelligence project aimed at improving health has stood out for its innovation and potential positive impact on society.",
    url: "https://www.facebook.com/GDGCochabamba/posts/431290402846361?__cft__[0]=AZW6Vm-s_LJ6ML8YNABV3zcz7zSXZ11i6t3XQbXoUvg471jbde3mcOhdq8qsK-2AW16sCcaeQNfZX0qd1scwTf3tHUbcZV1TBD34WkWILDNEukxmRcM_et7vIkxMhluG5OEPwC4hdDmJ26GB950fPfJIDZRNkKf0mknlgd7p2FGq7do9CIgSZOgyV5A-Ge7cfaZDBU1LkgEzJHy6CEDfUe9n&__tn__=%2CO%2CP-R",
  },
  {
    title: "Speaker Talk about digital brain with OBSIDIAN",
    description:
      "This talk delves into the exciting world of digital note-taking and knowledge management with Obsidian, a powerful tool for cultivating your second brain.",
    url: "https://www.facebook.com/gdg.elalto.bo/posts/309662988799122?__cft__[0]=AZV0nq78q-GIE-8SAbmHEVa0l-QvFL02-oAZ-HR5pxWI7qyaTUsigup-1bl0DMrS-Kdwc9L-BhfcvCrv9TuWwYAaghOOJmMHuIZrZfpaHqz0GhKkXSW0OmHRIDDvKL02Mp-HmEIeNeheZtTObmZQGDAv020AqrxTqIAC5cG4R3vaypHftIakAglCLgLeo6dXOtgLN0ALMPrAEVKGTVkPjjzj&__tn__=%2CO%2CP-R",
  },
  {
    title: "Competitor 𝗚𝗹𝗼𝗯𝗮𝗹 𝗔𝗜 𝗕𝗼𝗼𝘁𝗰𝗮𝗺𝗽 𝟮𝟬𝟮𝟰 desde el Virtual DEV Show... 🥳",
    description:
      "Learn Artificial Intelligence with Azure to generate and work with solutions for the benefit of society. 🙌",
    url: "https://www.facebook.com/MSFTStudentAmbassadorsAmericas/posts/793102409505415?__cft__[0]=AZWqgRc9HhhZFfe6K4saZ8j4WZusysV5x4TUzAcG_gGsLMDhXoksqbMR8xPsZ7X0CQmkMiOh8SvAKihJGKcLeLW1nkiitG9xy632gw4idw31K8JUzoq3PngkAo75T-xIH30BLI5O0crB1q3StuZ-9w8-WcuaGn274ogegmdMAGjbeaUb8ZziR4ioOLXgD4M-NweL9cuUE_fRPb-Fz8fnRPHxhcnPUUXoDXDpXSkPMArWbw&__tn__=%2CO%2CP-y-R",
  },
  {
    title: "Creacion de contenido 𝐩𝐨𝐬𝐭, 𝐞𝐱𝐩𝐥𝐨𝐫𝐚𝐫𝐞𝐦𝐨𝐬 𝐞𝐥 𝐢𝐧𝐜𝐫𝐞𝐢́𝐛𝐥𝐞 𝐩𝐨𝐭𝐞𝐧𝐜𝐢𝐚𝐥 𝐝𝐞 𝐥𝐚 𝐈𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐀𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 (𝐈𝐀) 𝐞𝐧 𝐭𝐫𝐞𝐬 𝐚́𝐫𝐞𝐚𝐬 𝐟𝐮𝐧𝐝𝐚𝐦𝐞𝐧𝐭𝐚𝐥𝐞𝐬",
    description:
      "Immerse yourself in the amazing world of AI understanding human language, powered by tools like GPT-4.",
    url: "https://www.facebook.com/leynavarinia.pachecoquisbert/posts/10233650729716361?__cft__[0]=AZW91EigLH5jOLkE15-OBQ0vL9WiLELCnketUbINB8MqaIltMlcCEMUBLM7jzNb5xR6NgMHxFSy9tVMuaPsy6FgXan42mNNYijlGYfze8c3G73fc0Zgq37FhaPDLkySzWOU&__tn__=%2CO%2CP-R",
  },
  {
    title: "post Discover the fascinating generative AI! 🤖✨",
    description:
      "Generative Artificial Intelligence is an innovative technology that is revolutionizing the way we create content, from images and music to text and much more.",
    url: "https://www.linkedin.com/posts/leyna-varinia-pacheco-quisbert-31960a135_ia-innovaciaejn-tecnologaeda-activity-7122821658796584960-mPzH?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Logistics leader NASA Space Apps Chalengs 2023",
    description:
      "The Logistics Leader plays a fundamental role in the success of the NASA Space Apps Challenge, ensuring the organization and smooth execution of the event at the Franz Tamayo University. As a leader, you will be responsible for the coordination of various logistical aspects",
    url: "https://www.linkedin.com/posts/leyna-varinia-pacheco-quisbert-31960a135_unifranz-sede-del-nasa-space-apps-challenge-activity-7096637986007605248-MEAr?utm_source=share&utm_medium=member_desktop",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
