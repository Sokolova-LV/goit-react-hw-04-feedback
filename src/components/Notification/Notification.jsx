import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

export const Notification = ({ message }) => {
    <Text>{message}</Text>
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};