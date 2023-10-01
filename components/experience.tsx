"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  //   console.log(experiencesData, "dfksjfskdv");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          console.log(item);
          return (
            //   key={index}
            //   contentStyle={{
            //     backgroundColor: "#f3f4f6",
            //     boxShadow: "none",
            //     border: "1px solid rgba(0, 0, 0, 0.05)",
            //     textAlign: "left",
            //     padding: "1.3rem 2rem",
            //   }}
            //   contentArrowStyle={{
            //     borderRight: "0.4rem solid #9ca3af",
            //   }}
            //   date={item.date}
            //   icon={item.icon}
            //   iconStyle={{
            //     background: "black",
            //     fontSize: "1.5rem",
            //   }}
            // >
            // <React.Fragment key={index}>
            //   <VerticalTimelineElement>
            //     <h3 className="font-semibold capitalize bg-slate-500">
            //       {item.title}
            //     </h3>
            //     <p className="font-normal !mt-0">{item.location}</p>
            //     <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-dark">
            //       {item.description}
            //     </p>
            //   </VerticalTimelineElement>
            // </React.Fragment>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
