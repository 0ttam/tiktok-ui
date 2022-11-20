import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e9a59df45d5677828659ca08f4897596~c5_100x100.jpeg?x-expires=1669093200&x-signature=PyMm7S496U%2Fr9X%2F04l9vH88JYyg%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nick-name')}>
                    <h4>utnhi_live</h4>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Út Nhị cevor</p>
            </div>
        </div>
    );
}

SuggestedAccountItem.propTypes = {};

export default SuggestedAccountItem;
