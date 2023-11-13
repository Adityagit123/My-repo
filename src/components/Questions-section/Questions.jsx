// Questions.jsx

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Questions.css';
import questionMarkIcon from '../assets/question-mark.png'
import bulbIcon from '../assets/lightbulb.png'

const Questions = () => {
  return (
    <section className="section-questions">
  <Container>
    <Row>
      <Col md={6} className="question-list1">
       
        <h3 className='title'>Do you struggle with these problems?</h3>

        <div className="question-container">
          <div className="question">
            <img src={questionMarkIcon} alt="Icon" />
            Have you joined English coaching before with no results?
          </div>
          <div className="question">
            <img src={questionMarkIcon} alt="Icon" />
            Is learning spoken English burning a hole in your pocket?
          </div>
          <div className="question">
            <img src={questionMarkIcon} alt="Icon" />
            Do you find spoken English too expensive?
          </div>
          <div className="question">
            <img src={questionMarkIcon} alt="Icon" />
            Does English grammar scare you?
          </div>
          <div className="question">
            <img src={questionMarkIcon} alt="Icon" />
            Do you struggle with finding right words at right time?
          </div>
        </div>
      </Col>

      <Col md={6} className="question-list2">
        <h3 className='title'>Our Courses Can Help You</h3>
        

        <div className="question-container">
          <div className="question1">
            <img src={bulbIcon} alt="Icon" />
            Learn English at an affordable price.
          </div>
          <div className="question1">
            <img src={bulbIcon} alt="Icon" />
            Overcome your fear of English and gain fluency.
          </div>
          <div className="question1">
            <img src={bulbIcon} alt="Icon" />
            Improve your English grammar and vocabulary.
          </div>
          <div className="question1">
            <img src={bulbIcon} alt="Icon" />
            Speak English with confidence and clarity.
          </div>
          <div className="question1">
            <img src={bulbIcon} alt="Icon" />
            Feel confident to start a conversation in English.
          </div>
        </div>
      </Col>
    </Row>
  </Container>

  <style jsx>{`
    .section-questions {
      width: fit-content;
      padding: 1rem;

      /* Center the two column boxes */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .question-list {
      padding: 20px;
    }
  `}</style>
</section>

  );
};

export default Questions;

