import { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // stateUpdate = ({target:{name}}) => {
  stateUpdate = event => {
    // const currentFeedback = event.target.name;
    
    // this.setState(prevState => {
    //   return {[currentFeedback]: prevState[currentFeedback] + 1};
    // });
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return (Object.values(this.state).reduce((acc, item) => acc + item));
  };
  // countTotalFeedback = () => 
  //   (Object.values(this.state).reduce((acc, item) => acc + item));

  countPositiveFeedbackPercentage = () => {
    return (parseInt(this.state.good / this.countTotalFeedback() * 100));
  };
  
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">

          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.stateUpdate} />
          
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback()
            ?
            <Notification message="No feedback given" />
            :
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />
          }
        </Section>
      </Container>
    );
  };
};

export default App;