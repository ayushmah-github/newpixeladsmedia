import React from 'react';
import './Page2.css';

const Page2 = () => {
  return (
    <div className="why-us-section">
      <div className="why-us-content">
        <h1>Why Us ?</h1>
        <h2><strong>What</strong> Makes us the Best</h2>
        <p>
          To break new ground with services aimed squarely at helping those companies who have struggled 
          to adjust to the changed marketing landscape of a digital age. We offer all of this owing to our 
          mix of experienced professionals working on tailored requirements with our clients.
        </p>

        <div className="skills">
          <div className="skill">
            <span>Design & develop</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '82%' }}>82%</div>
            </div>
          </div>
          <div className="skill">
            <span>Marketing</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '93%' }}>93%</div>
            </div>
          </div>
          <div className="skill">
            <span>Data Visualization</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '100%' }}>100%</div>
            </div>
          </div>
          <div className="skill">
            <span>Analytic</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '92%' }}>92%</div>
            </div>
          </div>
          <div className="skill">
            <span>SEO</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '89%' }}>89%</div>
            </div>
          </div>
          <div className="skill">
            <span>Social Media</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '84%' }}>84%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-content">
          <span role="img" aria-label="Lightning">⚡</span> 
          <span>15+ Years of Experience</span>
        </div>
        <div className="bee-icon">
          <img src="/path/to/bee-image.png" alt="Bee" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
