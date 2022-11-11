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
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]); // khi clear chỉ còn mảng rỗng
            // nếu là chuỗi rỗng sẽ lọt vào đây
            return;
        }
        setLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchValue,
            )}&type=less`,
        ) // mã hóa các kí tự ko hợp lệ (?,&...) thành hợp lệ trên URL
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, [searchValue]);
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
                        {searchResult.map((result) => (
                            <AccountItem
                                key={result.id}
                                data={result}
                            />
                        ))}
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
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                        />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />
                )}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}
export default Search;
