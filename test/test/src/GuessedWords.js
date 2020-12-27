import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords=(props)=>{

    let contents;
    if(props.guessedWords.length===0){
        contents=(
            <span data-test="guess-instruction" >
                try to guess the secret word !!
            </span>
        )
    }else{
    const guessedWordsRow=props.GuessedWords.map((Word,index)=>(<tr key={index} data-test="guessed-word">
        <td>{Word.guessedWord}</td>
<td>{Word.guessedWord}</td>
</tr>)
)
        contents=(
            <>
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
{guessedWordsRow}
                    </tbody>
                </table>
            </div>
            </>
            )
        
    }
return(
    <>
<div data-test="component-guessed">
{contents}
</div>

    </>
)

}
GuessedWords.propTypes={
guessedWords:PropTypes.arrayOf(
    PropTypes.shape(
        {
            guessedWord:PropTypes.string.isRequired,
            lettersMAtchCount:PropTypes.number.isRequired,
        }
    )
).isRequired,
}

export default GuessedWords;