// import React, { useEffect, useState } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import {FaLightbulb} from "react-icons/fa";
import Typography from '@mui/material/Typography';
import TourIcon from '@mui/icons-material/Tour';
import VerifiedIcon from '@mui/icons-material/Verified';

import './CustomizedTimeline.css';



const AnimatedTimelineItem = ({ children, index }) => {
  const [animate, setAnimate] = useState(false);
  const timelineItemRef = useRef();

  const handleScroll = () => {
    const itemTop = timelineItemRef.current.getBoundingClientRect().top;

    if (itemTop < window.innerHeight/1.5) {
      setAnimate(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TimelineItem ref={timelineItemRef} className={`timeline-item ${animate ? 'animate' : ''}`}>
      {children}
    </TimelineItem>
  );
};

export default function CustomizedTimeline() {
  return (
    <div  >
      {/* <img alt="..." className="path" src={require("assets/img/path1.png")} /> */}

    <div className="timeline-container">
    <h1 className='font-bold text-5xl color-white gradient-text'  >Timeline</h1>

      <Timeline position="alternate" className="fade-in" id="timeline">
        <AnimatedTimelineItem index={0}>
          <TimelineOppositeContent align="right" variant="h6" className='timeline-content'>
            Feb 21st
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector className="timeline-connector" />
            <TimelineDot color="secondary" variant="outlined">
              <TourIcon style={{ color: 'white' }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '1px', px: 2 }} className="timeline-content">
            <Typography variant="h6" component="span">
              Launch
            </Typography>
            <Typography>Official start of IPL</Typography>
          </TimelineContent>
        </AnimatedTimelineItem>

        <AnimatedTimelineItem index={1}>
          
          <TimelineSeparator>
            <TimelineConnector className="timeline-connector" />
            <TimelineDot color="primary" className='timeline-dot'>
              <LaptopMacIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '1px', px: 2 }} className="timeline-content">
            
          </TimelineContent>
        </AnimatedTimelineItem>

        <AnimatedTimelineItem index={2}>
          <TimelineSeparator>
            <TimelineConnector className="timeline-connector" />
            <TimelineDot color="primary" variant="outlined">
              <FaLightbulb style={{ color: 'white' }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '1px', px: 2 }} className="timeline-content">
            
          </TimelineContent>
        </AnimatedTimelineItem>

        <AnimatedTimelineItem index={3}>
          <TimelineSeparator>
            <TimelineConnector className="timeline-connector" />
            <TimelineDot className='timeline-dot'>
              <VerifiedIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '1px', px: 2 }} className="timeline-content">
            <Typography variant="h6" component="span">
              Result
            </Typography>
            <Typography>Stay Tuned! </Typography>
          </TimelineContent>
        </AnimatedTimelineItem>

        
      </Timeline>
      <br />
      <br />
      <br />
      <br />

    </div>
    </div>
  );
}