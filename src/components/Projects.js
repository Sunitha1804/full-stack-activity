import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Rail tech Automation</h3>
            <p>
              Rail tech automation is transforming the rail industry by integrating advanced technologies
              like AI, IoT, and machine learning to improve safety, efficiency, and sustainability.
            </p>
          </div>
          <div className="project-card">
            <h3>Attendance management system</h3>
            <p>Attendance management system to track the Attendance of any organization.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
