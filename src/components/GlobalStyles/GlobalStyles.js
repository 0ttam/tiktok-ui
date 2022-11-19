import './GlobalStyles.scss';
import PropTypes from 'prop-types';
import React from 'react';

function GlobalStyles({ children }) {
    return React.Children.only(children); // chỉ import 1 children
}

GlobalStyles.propTypes = {
    data: PropTypes.node,
};

export default GlobalStyles;
