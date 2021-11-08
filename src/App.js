import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackType = ['Good', 'Neutral', 'Bad'];

  const feedbackUpdate = option => {
    switch (option) {
      case 'Good': setGood(prevState => prevState + 1);
        break;
      case 'Neutral': setNeutral(prevState => prevState + 1);
        break;
      case 'Bad': setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => good + neutral + bad;

  const positiveFeedbackPercentage = () => {
    return (parseInt(good / totalFeedback() * 100));
  };
  
  return (
    <Container>
      <Section title="Please leave feedback">

        <FeedbackOptions
          options={feedbackType}
          onLeaveFeedback={feedbackUpdate} />
      
      </Section>
      <Section title="Statistics">
        {!totalFeedback()
          ?
          <Notification message="No feedback given" />
          :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()} />
        }
      </Section>
    </Container>
  );
};

export default App;