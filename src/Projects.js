import React, { useState } from "react";
import grocery from "./assets/projects/grocery.png";
import sf_sim from "./assets/projects/sf_sim.png";
import x8 from "./assets/projects/x8.jpeg";
import stock from "./assets/projects/stock_portfolio.png";
import ilearning from "./assets/projects/ilearning.png";
import parkour_start from "./assets/projects/parkour_start.jpg";
import pacman from "./assets/projects/pacman.jpg";
import mariokart from "./assets/projects/mario_kart.jpg";
import personal from "./assets/projects/personal.png";
import grocery_1 from "./assets/projects/grocery/home.png";
import grocery_2 from "./assets/projects/grocery/graph.png";
import grocery_3 from "./assets/projects/grocery/new.png";
import grocery_4 from "./assets/projects/grocery/import.png";
import x8_1 from "./assets/projects/x8/x8_home.jpg";
import x8_2 from "./assets/projects/x8/x8_wishlist.jpg";
import x8_3 from "./assets/projects/x8/x8_storelocator.jpg";
import x8_4 from "./assets/projects/x8/x8_profile.jpg";
import dueoh_1 from "./assets/projects/dueoh/Login.png";
import dueoh_2 from "./assets/projects/dueoh/Profile_.png";
import dueoh_3 from "./assets/projects/dueoh/Calendar_.png";
import dueoh_4 from "./assets/projects/dueoh/Analytics.png";
import dueoh_5 from "./assets/projects/dueoh/Week.png";
import dueoh_6 from "./assets/projects/dueoh/GUI.png";
import ilearning_1 from "./assets/projects/ilearning/1.png";
import ilearning_2 from "./assets/projects/ilearning/2.png";
import ilearning_3 from "./assets/projects/ilearning/3.png";
import ilearning_4 from "./assets/projects/ilearning/4.png";
import ilearning_5 from "./assets/projects/ilearning/5.png";
import ilearning_6 from "./assets/projects/ilearning/6.png";
import ilearning_7 from "./assets/projects/ilearning/7.png";
import ilearning_8 from "./assets/projects/ilearning/8.png";
import parkour_1 from "./assets/projects/parkour/parkour_1.jpg";
import parkour_2 from "./assets/projects/parkour/parkour_2.jpg";
import parkour_3 from "./assets/projects/parkour/parkour_3.jpg";
import parkour_4 from "./assets/projects/parkour/parkour_4.jpg";
import parkour_5 from "./assets/projects/parkour/parkour_5.jpg";
import pacman_1 from "./assets/projects/pacman/pacman_1.jpg";
import pacman_2 from "./assets/projects/pacman/pacman_2.jpg";
import pacman_3 from "./assets/projects/pacman/pacman_3.jpg";
import pacman_4 from "./assets/projects/pacman/pacman_4.jpg";
import pacman_5 from "./assets/projects/pacman/pacman_5.jpg";
import mariokart_1 from "./assets/projects/mariokart/mariokart_1.jpg";
import mariokart_2 from "./assets/projects/mariokart/mariokart_2.jpg";
import mariokart_3 from "./assets/projects/mariokart/mariokart_3.jpg";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [isModalShown, setIsModalShown] = useState();
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState();
  const [carouselImages, setCarouselImages] = useState([]);
  const [webLink, setWebLink] = useState();
  const [srcLink, setSrcLink] = useState();
  const [wireframeLink, setWireframeLink] = useState();
  const [tags, setTags] = useState();

  const data = [
    [
      {
        name: "Grocery Checklist",
        info: (
          <div>
            <div className="mb-3">
              <div>
                • A single page ReactJS application that streamlines the process
                of grocery shopping
              </div>
              <div>
                • Utilized CRUD operations when making AJAX calls to JSON server
                to display purchases on past grocery trips
              </div>
              <div>
                • Prepared unit tests for components and functions with MirageJS
                to mitigate program-breaking errors
              </div>
            </div>
            <div className="modal-subheading">
              Overview of how the app is used:
            </div>
            <div>
              Home: <br />- Display details of all past shopping trips <br />-
              Able to sort based on any of the 4 categories <br />- Selecting
              any row will allow user to update that shopping list
              <br />
              Graph: <br />- Plot a graph of all past groceries with respect to
              date and spending to keep track of expenditure
              <br /> New: <br /> - Create a brand new shopping list and add it
              to the database when "Save" is pressed <br />
              Import: <br />- Allows user to create a new shopping list but
              already pre-filled with a past grocery list of user's choice
            </div>
          </div>
        ),
        image: grocery,
        carouselImages: [grocery_1, grocery_2, grocery_3, grocery_4],
        websiteUrl: "https://ghobind-grocery-checklist.netlify.app/",
        sourceCodeUrl: "https://github.com/ghobind/grocery-checklist",
        wireframeUrl: "None",
        languages: "ReactJS / JavaScript / AJAX / jQuery / HTML / CSS",
      },
      {
        name: "iLearning Platform Tools",
        info: (
          <div>
            <div className="mb-3">
              <div>
                • Developed a class management tool using ReactJS to facilitate
                group online learning such that students with diverse
                perspectives are grouped together using a custom clustering
                algorithm
              </div>
              <div>
                • Integrated the app into MS Teams which will be used in an
                iPodia course with 8-10 participating universities
              </div>
              <div>
                • Set up endpoints to request for information from the backend
                stored using Node.js
              </div>
            </div>
            <div className="modal-subheading">
              Overview of how the app is used:
            </div>
            <div>
              Step 1: <br /> - We decide on the type of group to create for any
              particular activity <br />
              Step 2 <br /> -We then select the category and decide its weights
              to determine how dissimilar we want the students in each group to
              be <br /> Step 3: <br /> Next, we decide the size of each group{" "}
              <br /> - These choices will then be fed to the backend for the
              clustering algorithm to decide how to group the students <br />{" "}
              Step 4: <br />- Once the algorithm is done, it will return the
              different groups created as a preview <br /> - Notice that a
              "Diversity Percentage" is displayed to show the result of
              dissimilarity of students in each group <br />- This is done prior
              to actual group creation to allow user to make changes if
              necessary <br /> Step 5: <br /> Once finalized, we pass this data
              to the backend again to actually create and save these groups{" "}
              <br />- At the same time, group chats are automatically created
              for each group to allow discussion
            </div>
          </div>
        ),
        image: ilearning,
        carouselImages: [
          ilearning_1,
          ilearning_2,
          ilearning_3,
          ilearning_4,
          ilearning_5,
          ilearning_6,
          ilearning_7,
          ilearning_8,
        ],
        websiteUrl: "None",
        sourceCodeUrl: "None",
        wireframeUrl:
          "https://www.figma.com/file/Z4YRkCgsumm78bnJ8JwktQ/iLearning-Platform-Tools?node-id=0%3A1",
        languages: "ReactJS / Node.js / JavaScript / AJAX ",
      },
      {
        name: "X8 Clothing iOS App",
        info: (
          <div>
            <div className="mb-3">
              <div>
                • Prototyped an iOS application using Swift to display inventory
                of X8, a clothing brand based in Indonesia
              </div>
              <div>
                • Utilized Firebase to store user information and their
                favorited items
              </div>
              <div>
                • Integrated Google Maps into the application as part of a Store
                Locator feature
              </div>
            </div>
            <div className="modal-subheading">
              Overview of how the app is used:
            </div>
            <div>
              There are 4 sections of the app:
              <br />
              Home: <br />- Allow user to explore X8's current inventory which
              is pulled from Firebase <br /> - Tapping "New Arrival" will bring
              the user to a different view, showing a table of all the current
              products of X8 <br />
              - Each item has a heart on the top right corner to allow user to
              "Wishlist" that item <br />
              Wishlist: <br /> - This section contains all the clothing that the
              current user has wishlisted <br />
              Store Locator: <br /> - Made use of GoogleMaps to display all
              current locations of X8 stores <br />- Identifies the closest
              store to the user <br />
              Profile: <br />
              - Prompts user to login/sign up in order to make full use of the
              app <br />
            </div>
          </div>
        ),
        image: x8,
        carouselImages: [x8_1, x8_2, x8_3, x8_4],
        websiteUrl: "None",
        sourceCodeUrl: "None",
        wireframeUrl: "None",
        languages: "Swift / Xcode / iOS / Firebase",
      },
      {
        name: "Stock Portfolio Management",
        info: (
          <div>
            <div className="mb-3">
              <div>
                • Utilized Scrum with a team of 4 to make a website that
                provided the value of portfolio stocks over time
              </div>
              <div>
                • Leveraged HighCharts API to visualize and reflect real time
                stock price changes
              </div>
              <div>
                • Implemented endpoints and stored necessary data using MySQL
              </div>
            </div>
            <div className="modal-subheading">
              Overview of how the app is used:
            </div>
            <div>
              - Able to login/register <br />
              - Able to add stocks with shortened name. A check will be done
              prior to adding to ensure the stock exists. <br />- Made use of
              HighCharts API to display all stocks user currently has <br />-
              All data saved in MySQL database
            </div>
          </div>
        ),
        image: stock,
        carouselImages: [],
        websiteUrl: "None",
        sourceCodeUrl: "None",
        wireframeUrl: "None",
        languages: "Java / JavaScript / AJAX / jQuery / HTML / CSS / MySQL",
      },
    ],
    [
      {
        name: "DueOh",
        info: (
          <div>
            <div className="mb-3">
              Students tend to miss out on their deadlines due to assignments
              being on different platforms like Den Viterbi, Gradescope,
              Blackboard, Vocareum, etc. With DueOh, students can track the
              status of specific assignments and are thus less likely to lose
              points from missing deadlines.
            </div>
            <div className="modal-subheading">
              Overview of how the app is used:
            </div>
            <div>
              - Able to login/register <br />
              - Once logged in, we will display all classes the user is
              currently taking and display all assignments <br />
              - We help to track submission status of each assignment <br />-
              Provide option to remind user when a deadline is coming up <br />
              - Calendar view is provided for easier visualization <br />
              - Provide analytics for assignments due that month and a pie chart
              displayed to visualize workload of each class <br />
              - Guest mode available for trial
              <br />- All data saved in MySQL database
            </div>
          </div>
        ),
        image: dueoh_1,
        carouselImages: [dueoh_1, dueoh_2, dueoh_3, dueoh_4, dueoh_5, dueoh_6],
        websiteUrl: "None",
        sourceCodeUrl: "https://github.com/ghobind/DueOh",
        wireframeUrl: "None",
        languages: "Java / Javascript / HTML / CSS / MySQL",
      },

      {
        name: "Parkour's Edge",
        info: (
          <div>
            <div className="mb-3">
              Implemented a first person 3D game similar to Mirror's Edge. Do
              all sorts of cool stuff like climbing walls and wall running.
            </div>
            <div className="modal-subheading">
              Overview of how the app is used:
            </div>
            <div>
              - Implemented 3 levels of play where the first level is the
              tutorial <br />
              - Directional arrow at the top of the screen to direct the player
              to each checkpoint <br />
              - Allow player to wall jump a certain height only after user has
              built enough velocity <br />- Allow player to run alongside the
              wall if approached at an angle and with sufficient velocity <br />
              - Implemented obstacles like crevices, rotating security cameras
              and laser mines player has to avoid <br />
              - Radar at the bottom right of the screen will display security
              cameras player should avoid when it's close enough
              <br /> - Timer to keep track of record
            </div>
          </div>
        ),
        image: parkour_start,
        carouselImages: [parkour_1, parkour_2, parkour_3, parkour_4, parkour_5],
        websiteUrl: "None",
        sourceCodeUrl: "None",
        wireframeUrl: "None",
        languages: "C++",
      },
      {
        name: "Pac Man",
        info: (
          <div>
            <div className="mb-3">
              Remake of classic Pacman game utilizing A* search to find shortest
              path for 4 ghost AIs to Pacman. If the ghosts touch Pacman, the
              game is lost. If Pacman manages to collect all yellow orbs, Pacman
              wins.
            </div>
            <div className="modal-subheading">
              Overview of how the app is used:
            </div>
            <div>
              <div>- Ghosts have 4 states</div>
              <div>
                Scatter: <br />- Each ghost will find the shortest path to the 4
                corners of the map (image 1) <br />- All ghosts will initially
                be in this state <br /> - Will return to this state from
                frightened state after some time
              </div>
              <div>
                Chase: <br />- Will chase after Pacman after Scatter state is
                completed <br />
                - Will lock on to different locations of Pacman (image 2) <br />
                - e.g. current position, previous 2 positions, predicted
                position
              </div>
              <div>
                Frightened: <br /> - Pacman can eat power orbs to make ghosts
                frightened turning them blue (image 3) <br /> - When frightened,
                ghosts will take move in random directions trying to avoid
                Pacman <br />- In this state, Pacman is able to eat the ghost
                which will turn them to Dead state (image 4) <br />- After some
                time, ghosts will flash between blue and white indicating that
                Frightened state is about to end
              </div>
              <div>
                Dead: <br /> - Turn ghost into eyes which will cause the ghost
                to go home (center) before returning to Scatter (image 4 & 5)
              </div>
            </div>
          </div>
        ),
        image: pacman,
        carouselImages: [pacman_1, pacman_2, pacman_3, pacman_4, pacman_5],
        websiteUrl: "None",
        sourceCodeUrl: "None",
        wireframeUrl: "None",
        languages: "C++",
      },
      {
        name: "Mario Kart",
        info: (
          <div>
            <div className="mb-3">
              Play a replica of Mario Kart's famous Rainbow Bridge versus an AI
            </div>
            <div className="modal-subheading">
              Overview of how the app is used:
            </div>
            <div>
              - Use arrow keys to move your kart <br />
              - The AI will move in a set path <br />
              - Overtaking the AI will update current standing from 2nd to 1st
              (image 2) <br />- There are 4 laps to catch up to opponent (image
              3)
            </div>
          </div>
        ),
        image: mariokart,
        carouselImages: [mariokart_1, mariokart_2, mariokart_3],
        websiteUrl: "None",
        sourceCodeUrl: "None",
        wireframeUrl: "None",
        languages: "C++",
      },
    ],
    [
      {
        name: "Personal Website",
        info: "Created website to showcase more about myself and my projects",
        image: personal,
        carouselImages: [],
        websiteUrl: "https://anthonyghobind.com",
        sourceCodeUrl: "https://github.com/ghobind/personal-website",
        wireframeUrl:
          "https://www.figma.com/file/PQw9FScWmtnvA4iWU6A4dY/Personal-Website?node-id=0%3A1",
        languages: "ReactJS / HTML / CSS",
      },
      {
        name: "Starforce Simulator",
        info: "Simulates probability and costs of enhancing equipments with Starforce in the MMORPG Maplestory",
        image: sf_sim,
        carouselImages: [],
        websiteUrl: "None",
        sourceCodeUrl: "https://github.com/ghobind/starforce-simulator",
        wireframeUrl: "None",
        languages: "C++",
      },
    ],
  ];

  function hideModal() {
    setIsModalShown(false);
  }
  function showModal() {
    setIsModalShown(true);
  }
  function setProjectInfo(
    heading,
    content,
    img,
    carouselImages,
    webLink,
    srcLink,
    wireframeLink,
    tags
  ) {
    setHeading(heading);
    setContent(content);
    setImg(img);
    setCarouselImages(carouselImages);
    setWebLink(webLink);
    setSrcLink(srcLink);
    setWireframeLink(wireframeLink);
    setTags(tags);
  }

  function projectContent(
    name,
    info,
    image,
    carouselImages,
    websiteUrl,
    sourceCodeUrl,
    wireframeUrl,
    languages
  ) {
    return (
      <div
        className="logo mx-3"
        onClick={() => {
          showModal();
          setProjectInfo(
            name,
            info,
            image,
            carouselImages,
            websiteUrl,
            sourceCodeUrl,
            wireframeUrl,
            languages
          );
        }}
      >
        <div className="overlay">
          <div className="overlay-text">+</div>
        </div>
        <img className="project-icon" src={image} alt={`project ${name}`} />
      </div>
    );
  }

  return (
    <div className="alt-body-color">
      <div className="projects-container page-margins" id="projects">
        {isModalShown && (
          <ProjectModal
            onClose={hideModal}
            heading={heading}
            content={content}
            img={img}
            carouselImages={carouselImages}
            webLink={webLink}
            srcLink={srcLink}
            wireframeLink={wireframeLink}
            tags={tags}
          />
        )}
        <h3 className="header">Projects</h3>
        <div className="project-subheader text-muted mb-5">
          Click on any project to find out more
        </div>
        <div className="">
          {data.map((row) => {
            return (
              <div className="row justify-content-center align-items-center my-3">
                {row.map((project) => {
                  return (
                    <div className="col-xs-12 col-md-3 ">
                      {projectContent(
                        project.name,
                        project.info,
                        project.image,
                        project.carouselImages,
                        project.websiteUrl,
                        project.sourceCodeUrl,
                        project.wireframeUrl,
                        project.languages
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
