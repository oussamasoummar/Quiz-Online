import React from 'react';

const AnswerOptions = ({question,isCheked,handleAnswerChange,handleCheckBoxChange}) => {
    if(!question){
        return <div> No questions available</div>
    }

    const {id,questionType,choices} = question

    if(questionType === "single"){
        return (
            <div>
                {choices.sort().map((choice,index) =>(
                    <div key={choice} className="form-check mb-3">
                        <input
                        className='form-check-input'
                        id={choice}
                        value={choice}
                        type='radio'
                        checked={isCheked(question.id,choice)}
                        onChange={() => handleAnswerChange(id,choice)}
                        />
                        <label className='form-check-label ms-2'>
                            {choice}
                        </label>
                    </div>
                ))}
            </div>
        )
    }else if(questionType ==="multiple"){
        return(
            <div>
                <p>Select All that apply</p>
                {choices.sort().map((choice,index) =>(
                    <div key={choice} className="form-check mb-3">
                        <input
                            className='form-check-input'
                            id={choice}
                            value={choice}
                            type='checkbox'
                            name={question.id}
                            checked={isCheked(question.id,choice)}
                            onChange={() => handleCheckBoxChange(id,choice)}
                        />
                        <label className='form-check-label ms-2'>
                            {choice}
                        </label>
                    </div>
                ))}
            </div>
        )
    }else{
        return null
    }


}

export default AnswerOptions;
