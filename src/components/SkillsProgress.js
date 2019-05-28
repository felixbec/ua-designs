import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class SkillsProgress extends Component {
  render() {
    return (
      <div>
        <p>HTML/HTML5</p>
        <ProgressBar animated now={90} />
        <p>CSS/SASS</p>
        <ProgressBar animated now={85} />
        <p>Javascript</p>
        <ProgressBar animated now={75} />
        <p>CMS - WordPress & Silverstripe</p>
        <ProgressBar animated now={75} />
        <p>ReactJS</p>
        <ProgressBar animated now={60} />
        <p>UI/UX</p>
        <ProgressBar animated now={60} />
        <p>Photoshop</p>
        <ProgressBar animated now={60} />
      </div>
    );
  }
}
