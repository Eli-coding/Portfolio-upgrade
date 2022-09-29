import React from "react";
import Project from "./project";
import cummulus from "../assets/cummulus chat.png";
import Planner from "../assets/dayplanner.png";
import notePad from "../assets/notepad.png";
import texteditor from "../assets/texteditor.png"
import hairtours from "../assets/hairtours.png"
import { Stack } from "@mui/material";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [project] = [
    {
      name: "Cumulus Chat",
      link: "https://infinite-caverns-73704.herokuapp.com/",
      repo: "https://github.com/bxz5089/Cumulus-Chat",
    },
    {
      name: "Planner",
      link: "https://eli-coding.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/Eli-coding/Work-Day-Scheduler",
    },
    {
      name: "Password generator",
      link: "https://note-pad-ey.herokuapp.com/notes",
      repo: "https://github.com/Eli-coding/Note-Pad",
    },
    {
      name: "text editor",
      link: " https://jate-text1.herokuapp.com/",
      repo: "https://github.com/Eli-coding/text_editor",
    },
    {
      name: "employee tracker",
      link: "https://github.com/Eli-coding/team-profile-generator",
      repo: "https://github.com/Eli-coding/team-profile-generator/blob/main/pageBones.html",
    },
    {
      name: "hair tours",
      link: " https://github.com/britt-klose/Hair-Tours",
      repo: "https://hairtours.herokuapp.com/",
    },
  ];

  return (
    <div className="projects">
      <div>
        <h1> My work</h1>
      </div>

      <div class="card">
        {/* <img src="https://github.com/bxz5089/Cumulus-Chat/blob/main/public/assets/ScreenShot1.png?raw=true"
                        class="card-img-top" alt="project-2"> */}

        <div class="card-body">
          <h3 class="card-title">Cumulus Cloud </h3>

          <div>
            <img src={cummulus} alt="me" height="200" width="300" />
          </div>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <a
              href="https://infinite-caverns-73704.herokuapp.com/"
              class="btn btn-info"
            >
              Deployed
            </a>
            <a
              href="https://github.com/bxz5089/Cumulus-Chat"
              class="btn btn-info"
            >
              Github Repo
            </a>
          </Stack>
        </div>
      </div>

      <div class="card">
        {/* <img src="https://user-images.githubusercontent.com/80432031/149646105-49ddc354-6ed8-4f72-a10a-8cbfdaeff5f8.png"
                        class="card-img-top" alt="planner"> */}
        <div class="card-body">
          <h3 class="card-title">Day Planner</h3>
          <div>
            <img src={Planner} alt="me" height="200" width="300" />
          </div>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <a
              href="https://eli-coding.github.io/Work-Day-Scheduler/"
              class="btn btn-info"
            >
              Deployed
            </a>
            <a
              href="https://github.com/Eli-coding/Work-Day-Scheduler"
              class="btn btn-info"
            >
              Github Repo
            </a>
          </Stack>
        </div>
      </div>

      <div class="card">
        {/* <img src="https://user-images.githubusercontent.com/80432031/156679972-2c173845-a36f-4544-b337-2cabb82bd1fb.png"
                        class="card-img-top" alt="passwordG"> */}
        <div class="card-body">
          <h3 class="card-title">Note-Pad</h3>
          <div>
             <img src={notePad} alt="me" height="200" width="300" /> 
          </div>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <a
              href="https://note-pad-ey.herokuapp.com/notes"
              class="btn btn-info"
            >
              Deployed
            </a>
            <a
              href="https://github.com/Eli-coding/Note-Pad"
              class="btn btn-info"
            >
              Github Repo
            </a>
          </Stack>
        </div>
      </div>
      <div class="card">
        {/* <img src="https://github.com/bxz5089/Cumulus-Chat/blob/main/public/assets/ScreenShot1.png?raw=true"
                        class="card-img-top" alt="project-2"> */}
        <div class="card-body">
          <h3 class="card-title">Text editor</h3>
          <div>
             <img src={texteditor} alt="me" height="200" width="300" /> 
          </div>

          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <a href=" https://jate-text1.herokuapp.com/" class="btn btn-info">
              Deployed
            </a>
            <a
              href="https://github.com/Eli-coding/text_editor"
              class="btn btn-info"
            >
              Github Repo
            </a>
          </Stack>
        </div>
      </div>

      

      <div class="card">
        {/* <img src="https://user-images.githubusercontent.com/80432031/156679972-2c173845-a36f-4544-b337-2cabb82bd1fb.png"
                        class="card-img-top" alt="passwordG"> */}

        <div class="card-body">
          <h3 class="card-title">Hair Tours</h3>
          <div>
             <img src={hairtours} alt="me" height="200" width="300" /> 
          </div>

          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <a href="https://hairtours.herokuapp.com/" class="btn btn-info">
              Deployed
            </a>
            <a
              href="https://github.com/britt-klose/Hair-Tours"
              class="btn btn-info"
            >
              Github Repo
            </a>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
