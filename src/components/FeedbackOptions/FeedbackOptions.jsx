import PropTypes from 'prop-types';
import { List, Item, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
    return (
        <List>
        {options.map(option => (
            <Item key={option}>
                <Btn name={option} type='button' key={option} onClick={leaveFeedback}>
                    {option}
                </Btn>
            </Item>
        ))}
    </List>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    leaveFeedback: PropTypes.func.isRequired,
}