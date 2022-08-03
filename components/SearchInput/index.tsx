import React, { useState } from 'react';
import styles from './styles.module.css';

type Props = {
    mainColor: string;
    onSearch: (searchValue: string) => void;
}

export const SearchInput = ({ mainColor, onSearch }: Props) => {
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
            style={{borderColor: focused ? mainColor : '#FFFFFF',}}
        >
            <div 
                className={styles.button} 
                onClick={()=>onSearch(searchValue)}
            >

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