import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log(`Type feedback name`);
    }
  };

  const countTotalFeedback = el => {
    return Object.values(el).reduce((total, current) => (total += current));
  };

  const countPositiveFeedbackPercentage = totalFeedback => {
    if (totalFeedback > 0)
      return Math.round((good / totalFeedback) * 100);
      return 0;
  };

  const totalFeedback = countTotalFeedback({ good, neutral, bad });
  const positivePercentage = countPositiveFeedbackPercentage(totalFeedback);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          leaveFeedback={leaveFeedback} 
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            percentage={positivePercentage} 
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};