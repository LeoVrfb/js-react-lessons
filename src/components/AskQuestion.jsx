import { useState } from 'react';
import { generateText } from '../gpt3';

function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleGenerateAnswer = async () => {
    const response = await generateText(question);
    setAnswer(response);
  };

  return (
    <div>
      <label htmlFor="question">Question:</label>
      <input type="text" id="question" value={question} onChange={handleQuestionChange} />

      <button onClick={handleGenerateAnswer}>Generate answer</button>

      {answer && (
        <div>
          <h2>Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
export default AskQuestion;
