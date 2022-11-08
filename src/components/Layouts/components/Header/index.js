import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faSignOut,
    faGear,
    faUser,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                    children: {
                        title: 'language',
                        data: [
                            {
                                code: 'en',
                                title: 'English',
                            },
                            {
                                code: 'vi',
                                title: 'Việt Nam',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback & Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard & Shortcuts',
    },
];

function Header() {
    const [searchResult, setResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setResult([]);
        }, 3000);
    }, []);
    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/getcoin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <TippyHeadless
                    interactive
                    // visible={searchResult.length > 0}
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
                </TippyHeadless>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content="Upload"
                                delay={(0, 200)}
                                placement="bottom"
                            >
                                <button
                                    className={cx(
                                        'action-btn',
                                    )}
                                >
                                    <FontAwesomeIcon
                                        icon={faCloudUpload}
                                    />
                                </button>
                            </Tippy>
                            <button
                                className={cx('action-btn')}
                            >
                                <FontAwesomeIcon
                                    icon={faMessage}
                                />
                            </button>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                    <Menu
                        items={
                            currentUser
                                ? userMenu
                                : MENU_ITEMS
                        }
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img
                                className={cx(
                                    'user-avatar',
                                )}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5057753ddac5a366de416504773394d6~c5_720x720.jpeg?x-expires=1667995200&x-signature=uigqpsvtZNaTibXydCWRcxyUF3A%3D"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button
                                className={cx('more-btn')}
                            >
                                <FontAwesomeIcon
                                    icon={
                                        faEllipsisVertical
                                    }
                                />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
