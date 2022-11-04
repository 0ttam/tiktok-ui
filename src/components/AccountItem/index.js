import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6ae2b0d5129c22fc8d7799d6951bbf29~c5_100x100.jpeg?x-expires=1667656800&x-signature=y8NiI%2ByRyuCK0zaANtFUP%2F7uJ2I%3D"
                className={cx('avatar')}
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>utnhi_mino_official</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>
                    utnhi_mino_official
                </span>
            </div>
        </div>
    );
}

export default AccountItem;
