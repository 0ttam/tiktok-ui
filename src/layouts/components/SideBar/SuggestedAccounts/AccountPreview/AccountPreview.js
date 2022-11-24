import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1669366800&x-signature=UkiT5FTQIVev%2B0MbMct%2FeceL8Eo%3D"
                    alt=""
                />
                <Button primary className={cx('follow')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <h4>utnhi_live</h4>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Út Nhị cevor</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>
                        8.2M
                    </strong>
                    <span className={cx('label')}>
                        Followers
                    </span>
                    <strong className={cx('value')}>
                        244.8M
                    </strong>
                    <span className={cx('label')}>
                        Likes
                    </span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
