import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faSignOut,
    faGear,
    faUser,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import {
    InboxIcon,
    MessageIcon,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Search';
import config from '~/config';

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
                {
                    code: 'ph',
                    title: 'Philipin',
                },
                {
                    code: 'tr',
                    title: 'Triều Tiên',
                },
                {
                    code: 'ch',
                    title: 'Trung Quốc',
                },
                {
                    code: 'da',
                    title: 'Đài Loan',
                },
                {
                    code: 'br',
                    title: 'Brunei',
                },
                {
                    code: 'ma',
                    title: 'Malaysia',
                },
                {
                    code: 'in',
                    title: 'Indonesia',
                },
                {
                    code: 'th',
                    title: 'Thái Lan',
                },
                {
                    code: 'la',
                    title: 'Lào',
                },
                {
                    code: 'ca',
                    title: 'Cambodia',
                },
                {
                    code: 'ph',
                    title: 'Philipin',
                },
                {
                    code: 'tr',
                    title: 'Triều Tiên',
                },
                {
                    code: 'ch',
                    title: 'Trung Quốc',
                },
                {
                    code: 'da',
                    title: 'Đài Loan',
                },
                {
                    code: 'br',
                    title: 'Brunei',
                },
                {
                    code: 'ma',
                    title: 'Malaysia',
                },
                {
                    code: 'in',
                    title: 'Indonesia',
                },
                {
                    code: 'th',
                    title: 'Thái Lan',
                },
                {
                    code: 'la',
                    title: 'Lào',
                },
                {
                    code: 'ca',
                    title: 'Cambodia',
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
    const currentUser = true;

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
                <Link
                    to={config.routes.home}
                    className={cx('logo-link')}
                >
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                outline
                                className={cx(
                                    'custom-upload',
                                )}
                            >
                                <Link
                                    to={
                                        config.routes.upload
                                    }
                                >
                                    <UploadIcon />
                                    Upload
                                </Link>
                            </Button>
                            <Tippy
                                content="Message"
                                delay={(0, 200)}
                                placement="bottom"
                            >
                                <button
                                    className={cx(
                                        'action-btn',
                                    )}
                                >
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                delay={(0, 200)}
                                placement="bottom"
                            >
                                <button
                                    className={cx(
                                        'action-btn',
                                    )}
                                >
                                    <p
                                        className={cx(
                                            'count-inbox',
                                        )}
                                    >
                                        99
                                    </p>
                                    <InboxIcon />
                                </button>
                            </Tippy>
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
                            <Image
                                className={cx(
                                    'user-avatar',
                                )}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5057753ddac5a366de416504773394d6~c5_720x720.jpeg?x-expires=1667995200&x-signature=uigqpsvtZNaTibXydCWRcxyUF3A%3D"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
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
