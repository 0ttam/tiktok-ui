import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    leftIcon,
    rightIcon,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // Remove event listeners when btn is disabled
    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (
                key.startsWith('on') &&
                typeof props[key] === 'function'
            ) {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary: primary,
        outline: outline,
        small: small,
        large: large,
        text: text,
        disabled: disabled,
        rounded: rounded,
        [className]: className, // khi co classname lay gia tri cua key lam className
    });
    return (
        <Comp className={classes} {...props} {...passProps}>
            {leftIcon && (
                <span className={cx('icon')}>
                    {leftIcon}
                </span>
            )}
            <span className={cx('title')}>{children}</span>
            {rightIcon && (
                <span className={cx('icon')}>
                    {rightIcon}
                </span>
            )}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    leftIcon: PropTypes.node, // truyền tùy ý
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired, // bắt buộc phải có
    onClick: PropTypes.func,
};

export default Button;
