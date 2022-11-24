import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function SuggestedAccountItem() {
    const renderPreview = (props) => {
        return (
            <div
                className={cx('preview')}
                tabIndex="-1" // ko bị tab vào
                {...props}
            >
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        // Wrapper Tippy
        <div>
            <Tippy
                offset={[-20, 0]}
                interactive //tương tác được với bên trong
                placement="bottom" // vị trí hiển thị của tippy
                delay={[500, 0]}
                render={renderPreview}
            >
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
                        <p className={cx('name')}>
                            Út Nhị cevor
                        </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default SuggestedAccountItem;
