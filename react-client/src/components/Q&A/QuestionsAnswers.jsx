import React, { createContext, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// components
import Questions from './questions';
import Modal from './Modal.jsx'
import secretKey from './secrets.js';

const { data } = require('./serverData.js');

const Container = styled.div`
  // display: flex;
  padding: 16px 32px;
  // margin: auto;
  justify-content: auto;
  align-items: center;
  height: 15vh;
  `;

const StyledHeader = styled.p`
  font-weight: normal;
`;
const Button = styled.button`
  font-weight: bold;
  // min-width: 100px;
  padding: 8px 16px;
  // border-radius: .5px;
  border: solid;
  border-width: thin;
  background: #fff;
  color: #141414;
  font-size: 16px;
  cursor: pointer;
`;

const StyledSearchBar = styled.input`
  font-weight: bold;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  width: 95%;
  height: 50px;
  background-image: url('https://www.freeiconspng.com/uploads/search-icon-png-5.png');
  background-size: 20px;
  background-position: 98% 15px;
  padding-left: 15px;
  background-repeat: no-repeat;
`;

export default function QuestionsAnswers({ prodName, questionsData }) {
  const questions = questionsData;
  const [searchTerm, setSearchTerm] = useState('');
  const storedQuestions = questions.results.map((element) => <Questions key={element.question_id} question={element} prodName={prodName} />);
  const [currentQs, setCurrentQs] = useState([storedQuestions[0], storedQuestions[1]]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleQuestionButtonClick = () => {
    setCurrentQs(storedQuestions);
  };

  const [questionButton, setQuestionButton] = useState(true);

  const hiddenButton = () => {
    setQuestionButton((prev) => !prev);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (searchTerm.length > 1) {
      search(searchTerm);
    } else if (searchTerm.length < 2) {
      setCurrentQs([storedQuestions[0], storedQuestions[1]]);
    }
  };
  const search = (term) => {
    const matchedQuestions = [];
    for (const question in questions.results) {
      if (questions.results[question].question_body.includes(term)) {
        matchedQuestions.push(questions.results[question]);
      }
    }
    setCurrentQs(matchedQuestions.map((element) => <Questions key={element.question_id} question={element} />));
    setQuestionButton(true);
  };

  return (
    <div>
      <StyledHeader>QUESTIONS & ANSWERS</StyledHeader>
      <div>
        <StyledSearchBar placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={searchTerm} onChange={handleChange} />
      </div>
      <div>&nbsp;</div>
      <div>
        {currentQs}
      </div>
      <Container>
        {questionButton ? <Button
          type="button"
          onClick={() => {
            handleQuestionButtonClick();
            hiddenButton();
          }}>
          More Answered Questions
        </Button> : null}
          <span> &nbsp;</span>
        <Button onClick={openModal}>Add a Question +</Button>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          prodName={prodName}
        />
      </Container>
    </div>
  );
}
