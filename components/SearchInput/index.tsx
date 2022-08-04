import React, { useState } from 'react';
import styles from './styles.module.css';
import SearchIcon from './searchIcon.svg';
import { useAppContext } from '../../contexts/AppContext';

type Props = {
    onSearch: (searchValue: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
    const { tenant } = useAppContext();

    const [focused, setFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(searchValue);
        }
    }

    return (
        <div
            className={styles.container}
            style={{ borderColor: focused ? tenant?.mainColor : '#FFFFFF', }}
        >
            <div
                className={styles.button}
                onClick={() => onSearch(searchValue)}
            >
                <SearchIcon color={tenant?.mainColor} />
            </div>
            <input
                type="text"
                className={styles.input}
                placeholder="Busque um produto"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyUp={handleKeyUp}
            />
        </div>
    );
}