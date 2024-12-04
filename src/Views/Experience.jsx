import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaSchool } from 'react-icons/fa';
import "./Experience.css"

const Experience = () => {
  return (
    <div id="Experience">
      <h1 class="exp">My Experience</h1>
      <VerticalTimeline lineColor="#ff0000">
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: '#000000', 
              color: '#fff', 
              boxShadow: '0 0 10px #ff0000, 0 0 20px #ff0000' 
            }}
            contentArrowStyle={{ 
              borderRight: '7px solid #ff0000' 
            }}
            iconStyle={{ 
              background: '#FF0000', 
              color: '#1E1E2F', 
              boxShadow: '0 0 10px #FF0000, 0 0 20px #FF0000' 
            }}
            icon={<FaBriefcase style={{ color: '#1E1E2F' }}/>}
            >
            <h3 
              className="vertical-timeline-element-title" 
              style={{ 
                color: '#FF00FF'
              }}
            >
              Secretary
            </h3>
            <h4 
              className="vertical-timeline-element-subtitle" 
              style={{ 
                color: '#00FF00'
              }}
            >
              HiC2
            </h4>
            <p style={{ color: '#FFFF00' }}>
              Duties and Responsibilities:
              <br></br>
              <br></br>
              - Meeting minutes and documentation of club related matters.
              <br></br>
              <br></br>
              - Assisting other executive members with club related matters.
            </p>
            <h5 
              className="vertical-timeline-element-time" 
              style={{ 
                color: '#FF4500'
              }}
            >
              2022 - present
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: '#000000', 
              color: '#fff', 
              boxShadow: '0 0 10px #ff0000, 0 0 20px #ff0000' 
            }}
            contentArrowStyle={{ 
              borderRight: '7px solid #ff0000' 
            }}
            iconStyle={{ 
              background: '#FF0000', 
              color: '#1E1E2F', 
              boxShadow: '0 0 10px #FF0000, 0 0 20px #FF0000' 
            }}
            icon={<FaSchool style={{ color: '#1E1E2F' }}/>}
            >
          <h3 className="vertical-timeline-element-title"
              style={{ 
                color: '#FF00FF'
              }}>Master's Degree in CyberSecurity</h3>
          <h4 className="vertical-timeline-element-subtitle"
              style={{ 
                color: '#00FF00'
              }}>University of Sydney</h4>
          <h5 className="vertical-timeline-element-time"              
              style={{ 
                color: '#FF4500'
              }}>2024 - 2025</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: '#000000', 
              color: '#fff', 
              boxShadow: '0 0 10px #ff0000, 0 0 20px #ff0000' 
            }}
            contentArrowStyle={{ 
              borderRight: '7px solid #ff0000' 
            }}
            iconStyle={{ 
              background: '#FF0000', 
              color: '#1E1E2F', 
              boxShadow: '0 0 10px #FF0000, 0 0 20px #FF0000' 
            }}
            icon={<FaSchool style={{ color: '#1E1E2F' }}/>}
          >
          <h3 className="vertical-timeline-element-title"
              style={{ 
                color: '#FF00FF'
              }}>Bachelor's Degree in Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle"
              style={{ 
                color: '#00FF00'
              }}>University of Wollogong</h4>
          <p style={{ color: '#FFFF00' }}>Activities and Societies
             EIS Mentor Program -- Mentee
             <br></br>
             <br></br>
             UOW hic2 -- Secretary
          </p>
          <h5 className="vertical-timeline-element-time"
          style={{ 
            color: '#FF4500'
          }}>2020 - 2023</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: '#000000', 
              color: '#fff', 
              boxShadow: '0 0 10px #ff0000, 0 0 20px #ff0000' 
            }}
            contentArrowStyle={{ 
              borderRight: '7px solid #ff0000' 
            }}
            iconStyle={{ 
              background: '#FF0000', 
              color: '#1E1E2F', 
              boxShadow: '0 0 10px #FF0000, 0 0 20px #FF0000' 
            }}
            icon={<FaSchool style={{ color: '#1E1E2F' }}/>}
          >
          <h3 className="vertical-timeline-element-title"
              style={{ 
                color: '#FF00FF'
              }}>Programmer Analyst Intern</h3>
          <h4 className="vertical-timeline-element-subtitle"
              style={{ 
                color: '#00FF00'
              }}>PSA International</h4>
          <p style={{ color: '#FFFF00' }}>
          For my mandatory internship as per Nanyang Polytechnic's Diploma in Information Technology curriculum, I am attached to ST2 Human Resource and Shared Services Department. I am tasked to do Robotic Process Automation (RPA) using UiPath which is used to implement and test scripts for RPA. RPA is used for common business processes which are repetitive in nature and not feasible to be done by a human. RPA helps to automate these processes and save precious resources such as time.
          </p>
          <p style={{ color: '#FFFF00' }}>
          Tasks as a Programmer Analyst:
          <br></br>
          <br></br>
          - Develop, test and implement RPA scripts using UiPath studios
          <br></br>
          <br></br>
          - Perform maintenance and debugging of existing scripts in the event of errors
          <br></br>
          <br></br>
          - Program in Excel VBA macro for automation of MS Excel spreadsheet processes
          <br></br>
          <br></br>
          - Program in Visual Basic when developing RPA scripts
          </p>
          <h5 className="vertical-timeline-element-time"
          style={{ 
            color: '#FF4500'
          }}>May 2018 - Aug 2018</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: '#000000', 
              color: '#fff', 
              boxShadow: '0 0 10px #ff0000, 0 0 20px #ff0000' 
            }}
            contentArrowStyle={{ 
              borderRight: '7px solid #ff0000' 
            }}
            iconStyle={{ 
              background: '#FF0000', 
              color: '#1E1E2F', 
              boxShadow: '0 0 10px #FF0000, 0 0 20px #FF0000' 
            }}
            icon={<FaSchool style={{ color: '#1E1E2F' }}/>}
          >
          <h3 className="vertical-timeline-element-title"
              style={{ 
                color: '#FF00FF'
              }}>Diploma in Information Technology</h3>
          <h4 className="vertical-timeline-element-subtitle"
              style={{ 
                color: '#00FF00'
              }}>Nanyang Polytechnic</h4>
          <p style={{ color: '#FFFF00' }}>Activities and Societies
             <br></br>
             <br></br>
              Activities and societies: Co-Curricular Activities: NYP Photography Club (Member)
              <br></br>
              <br></br>
              Volunteering: 
              NYP MUSE 2017 &#40;Event Photographer&#41; Activities and societies: Co-Curricular Activities: NYP Photography Club &#40;Member&#41; Volunteering: NYP MUSE 2017 &#40;Event Photographer&#41;
              Volunteering:
              <br></br>
              <br></br>
              - Student volunteer &#40;retail associate&#41; at Black Hat Asia 2018
              <br></br>
              <br></br>
              Achievements:
              - Infosecurity Technology &#40;Distinction&#41;
              - Computing Mathematics 2 &#40;Distinction&#41;
              - Certified Ethical Hacker &#40;CEH&#41; certification
              - Computer Hacking Forensic Investigator &#40;CHFI&#41; certification
              - RPA Developer Foundation Diploma Certificate
          </p>
          <h5 className="vertical-timeline-element-time"
          style={{ 
            color: '#FF4500'
          }}>2016 - 2019</h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;