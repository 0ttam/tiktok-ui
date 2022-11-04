import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setResult([]);
        }, 3000);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4
                                    className={cx(
                                        'search-title',
                                    )}
                                >
                                    Account
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        ></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                            />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button
                            className={cx('search-btn')}
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                            />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button
                        primary
                        rightIcon={
                            <FontAwesomeIcon
                                icon={faSignIn}
                            />
                        }
                    >
                        Log in
                    </Button>
                    <Tippy
                        interactive
                        visible
                        render={(attrs) => (
                            <div
                                className={cx(
                                    'search-result',
                                )}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4
                                        className={cx(
                                            'search-title',
                                        )}
                                    >
                                        Account
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}
                            />
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}
export default Header;
