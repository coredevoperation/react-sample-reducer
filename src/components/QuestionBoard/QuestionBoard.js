import React, { useState } from "react";
import questionImg from './img/question-mark.png';
import checkImg from './img/btn_check_on-b.png';

const data = require('../../config/data.json');

const QuestionBoard = () => {

    const [isChecked, onCheck] = useState(false);

    const optionClickOne = (question) => {
        if (question.option[1].isChecked) {
            question.option[1].isChecked = (!question.option[1].isChecked);

        }
        if (question.option[2].isChecked) {
            question.option[2].isChecked = (!question.option[2].isChecked);

        }
        if (question.option[3].isChecked) {
            question.option[3].isChecked = (!question.option[3].isChecked);

        }
        question.option[0].isChecked = (!question.option[0].isChecked);
        if (question.option[0].isChecked) {

        } else {
        }
        onCheck(!isChecked);
    }

    const optionClickTwo = (question) => {
        if (question.option[0].isChecked) {
            question.option[0].isChecked = (!question.option[0].isChecked);

        }
        if (question.option[2].isChecked) {
            question.option[2].isChecked = (!question.option[2].isChecked);

        }
        if (question.option[3].isChecked) {
            question.option[3].isChecked = (!question.option[3].isChecked);

        }
        question.option[1].isChecked = (!question.option[1].isChecked);
        if (question.option[1].isChecked) {

        } else {

        }
        onCheck(!isChecked);
    }
    const optionClickThree = (question) => {
        if (question.option[1].isChecked) {
            question.option[1].isChecked = (!question.option[1].isChecked);
        }
        if (question.option[0].isChecked) {
            question.option[0].isChecked = (!question.option[0].isChecked);
        }
        if (question.option[3].isChecked) {
            question.option[3].isChecked = (!question.option[3].isChecked);
        }
        question.option[2].isChecked = (!question.option[2].isChecked);
        if (question.option[2].isChecked) {

        } else {

        }
        onCheck(!isChecked);
    }

    const optionClickFour = (question) => {
        if (question.option[1].isChecked) {
            question.option[1].isChecked = (!question.option[1].isChecked);
        }
        if (question.option[2].isChecked) {
            question.option[2].isChecked = (!question.option[2].isChecked);
        }
        if (question.option[0].isChecked) {
            question.option[0].isChecked = (!question.option[3].isChecked);
        }
        question.option[3].isChecked = (!question.option[3].isChecked);
        if (question.option[3].isChecked) {

        } else {

        }
        onCheck(!isChecked);
    }
    return (
        <div>
            {data.map((question) => {
                return (
                    <div className="quiz-item">
                        <div className="quiz-item-main">
                            <h3>
                                <img src={questionImg} width="30px" height="30px" alt="Q. "></img>
                                {question.no + 1}: {question.quiz}
                            </h3>
                        </div>
                        {
                            <>
                                {/* Option 1: */}
                                <div onClick={() => optionClickOne(question)} key={question.option.id}>
                                    <div className='quiz-item-option-a'>
                                        {question.option[0].text}
                                        {
                                            question.option[0].isChecked &&
                                            <img src={checkImg} width="20px" height="20px" alt="img2" />
                                        }
                                    </div>
                                </div>

                                {/* Option 2: */}
                                <div onClick={() => optionClickTwo(question)} key={question.option.id}>
                                    <div className='quiz-item-option-a'>
                                        {question.option[1].text}
                                        {
                                            question.option[1].isChecked &&
                                            <img src={checkImg} width="20px" height="20px" alt="img2" />
                                        }
                                    </div>
                                </div>
                                {/* Option 3:*/}
                                <div onClick={() => optionClickThree(question)} key={question.option.id}>
                                    <div className='quiz-item-option-b'>
                                        {question.option[2].text}
                                        {
                                            question.option[2].isChecked &&
                                            <img src={checkImg} width="20px" height="20px" alt="img2" />
                                        }
                                    </div>
                                </div>
                                {/* Option 3:*/}
                                <div onClick={() => optionClickFour(question)} key={question.option.id}>
                                    <div className='quiz-item-option-b'>
                                        {question.option[3].text}
                                        {
                                            question.option[3].isChecked &&
                                            <img src={checkImg} width="20px" height="20px" alt="img2" />
                                        }
                                    </div>
                                </div>
                                {/* {
                                    (countState === total_quiz_count) &&
                                    <FixedComponent callbackResultView={onSubmit} />
                                } */}
                            </>

                        }
                    </div>
                );
            })}
        </div>
    );
}


export default QuestionBoard;
