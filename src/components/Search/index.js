import { useState, useEffect, useRef } from 'react';
import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '../Icons';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 600);
    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            // khi clear chỉ còn mảng rỗng
            setSearchResult([]);
            // nếu là chuỗi rỗng sẽ lọt vào đây
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(
                debounced,
            );
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    // handle
    const handleClear = () => {
        setSearchValue(''); // set ô tìm kiếm thành chuỗi rỗng
        inputRef.current.focus(); // dùng để blur
    };
    const handleOutside = () => {
        setShowResults(false);
    };
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        //Using a wrapper <div> tag around the reference element solves
        //this by creating a new parentNode context.
        <div>
            <TippyHeadless
                interactive
                visible={
                    showResults && searchResult.length > 0
                }
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
                        onChange={(e) => handleSearch(e)}
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

                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}
export default Search;
