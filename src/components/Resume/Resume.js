import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { ResumeBtn } from "./ResumeElements";
import { style } from '@mui/system';

export default function OppositeContentTimeline() {
  return (
    <div id="experience">
        <br></br>
        <h2 id="about" class="hr-lines"> 
        <p style={{fontSize: '30px'}}>Experience</p>
        </h2>
        <br></br>
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent color="primary black" fontSize={'18px'}>
                JANUARY 2023 - APRIL 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <h1 style={{ fontWeight:'bold', fontSize:25, color:`#4682b4` } }> UKG</h1>
                    <h2 style={{ fontWeight:'200', fontSize:20 } }>Software Engineering</h2>
                    <ul type = "disc">
                        <li>
                        • Modernized a monolithic legacy Java codebase into a containerized <strong>Microservices</strong> model,
                         wrote <strong>Lower-level design</strong> documentations for utilizing <strong>application service platform components</strong> to achieve enhanced application scalability
                        </li>
                        <li>
                        • Implemented the <strong>Factory Pattern</strong> and the <strong>Bridge Pattern</strong> to create service objects at runtime and decouple logical service interfaces from implementation details in a microservices architecture
                        </li>
                        <li>
                        • Refactored Gradle dependencies, resulting in streamlined development processes and improved build time by <strong>11%</strong>
                        </li>
                        <li>
                        • Deployed the application environment on <strong>Jenkins</strong> and <strong>Google Cloud Platform (GCP)</strong> using <strong>Kubernetes</strong>
                        to ensure software integrity after code modernization
                        </li>
                        <li>
                        • Wrote comprehensive unit and integration testing strategies using <strong>JUnit</strong> and <strong>Mockito</strong> to ensure high code quality andfull test coverage
                        </li>
                    </ul>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="primary black" fontSize={'18px'}>
                MAY 2022 - AUGUST 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h1 style={{ fontWeight:'bold', fontSize:25, color:`#4682b4` } }> CI Technologies </h1>
                    <h2 style={{ fontWeight:'200', fontSize:20 } }>Full Stack Developer</h2>
                    <ul type = "disc">
                        <li>
                        • Designed and implemented a full stack solution for <strong>authentication</strong> to an existing web application by configuring <strong>Spring Boot</strong> application to work with two login pages via <strong>HttpSecurity configuration</strong>
                        </li>
                        <li>
                        • Implemented advanced search APIs utilizing <strong>Hibernate Query Language (HQL)</strong> and proprietary abstraction built
                        </li>
                        <li>
                        • Created <strong>Data Transfer Objects</strong> to encapsulate data and parameters for method calls and maintained the <strong>Controller-Service-Repository</strong> pattern
                        </li>
                        <li>
                        • Maintained and improved existing <strong>RESTful interface</strong> for front-end consumption
                        </li>
                        <li>
                        • Implemented application database schema migrations via Liquibase scripts in YAML and SQL format
                        </li>
                        <li>
                        • Wrote 200+ <strong>automated integration</strong> tests for <strong>REST API</strong> to ensure implementation of service logic was performed
correctly across various edge case inputs
                        </li>
                    </ul></TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="primary black" fontSize={'18px'}>
                SEPTEMBER 2021 - DECEMBER 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <h1 style={{ fontWeight:'bold', fontSize:25, color:`#4682b4` } }> CI Technologies </h1>
                    <h2 style={{ fontWeight:'200', fontSize:20 } }>Full Stack Developer</h2>
                    <ul type = "disc">
                        <li>
                        • Used <strong>Hibernate ORM</strong> framework for data persistence related functionality - created <strong>POJO</strong> classes and mappings using <strong>Hibernate annotations</strong> such as @Entity and @ManyToOne
                        </li>
                        <li>
                        • Handled the <strong>HTTP requests and responses</strong> using <strong>Controller-Service-Repository</strong> pattern
                        </li>
                        <li>
                        • Implemented 30+ configurable features on several existing projects, at the core of which included functionality forgenerating <strong>Twilio API tokens</strong>, 
                        and implementing a set of reporting/analytical features
                        </li>
                        <li>
                        • Migrated an existing project from <strong>Java 10/11</strong> to <strong>Java 17</strong> which improved backend performance and mitigated several <strong>security vulnerabilities</strong>
                        </li>
                    </ul>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        <ResumeBtn>
            <a
                    className="btn btn2 SecondarBtn"
                    href="https://raw.githubusercontent.com/dianashi/personal-website/main/resume/spring2023_resume.pdf"
                >
                    Download Resume
                </a>
        </ResumeBtn>
    </div>
  );
}