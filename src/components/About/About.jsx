import React, { useRef } from 'react';
import './About.scss';
import video from '../Assets/dua-village-video.mp4';

const About = (props) => {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((ref, i) => {
      if (i !== index) {
        ref.pause();
      }
    });
  };

  return (
    <section className="about" id="about">
      <h2>Mountains of Gollak</h2>
      <div className="content">
        <div className="text-container">
          <h6>EXPERIENCE THE PARADISE</h6>
          <p>
            Mountains of Gollak is a region situated in the eastern part of Kosovo, covering just over 15% of the country's territory. Gollak, as a region within Kosovo, encompasses more than 120 villages, while outside of it there are over 30 villages. The map of Kosovo has four main regions. In the north is Kopaonik. To the west are the Albanian Alps. In the south is the Sharr Mountains. In the east lies Gollak.
          </p>
        </div>
        <div className="video-container">
          <video ref={ref => videoRefs.current[0] = ref} controls controlsList="nodownload" onPlay={() => handlePlay(0)} width="850px" height="500px">
            <source src={video} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default About;