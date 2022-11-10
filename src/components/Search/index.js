import { useState, useEffect, useRef } from 'react';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '../Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 0]);
        }, 3000);
    }, []);
    // handle
    const handleClear = () => {
        setSearchValue(''); // set ô tìm kiếm thành chuỗi rỗng
        inputRef.current.focus(); // dùng để blur
    };
    const handleOutside = () => {
        setShowResults(false);
    };

    return (
        <TippyHeadless
            interactive
            visible={showResults && searchResult.length > 0}
            render={(attrs) => (
                <div
                    className={cx('search-result')}
                    tabIndex="-1"
                    {...attrs}
                >
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Account
                        </h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleOutside} // bấm ra ngoài khu vực search
        >
            <div className={cx('search')}>
                <input
                    onFocus={() => {
                        setShowResults(true);
                    }} // bật tippy lên
                    ref={inputRef} // dùng để blur
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) =>
                        setSearchValue(e.target.value)
                    }
                />
                {!!searchValue && (
                    <button
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                        />
                    </button>
                )}

                {/* <FontAwesomeIcon
                    className={cx('loading')}
                    icon={faSpinner}
                /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}
export default Search;
