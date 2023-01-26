import { Icon } from '../Icon';
import styles from './styles.module.css';

type Props = {
    color: string;
    leftIcon?: string;
    rightIcon?: string;
    value: string;
    onClick?: () => void;
    fill?: boolean;
}

export const ButtonWithIcon = ({ color, leftIcon, rightIcon, value, onClick, fill }: Props) => {
    return (
        <div 
            className={styles.container}
            style={{ backgroundColor: fill ? color : "#F9F9FB" }}
            onClick={onClick}
        >
            {leftIcon && 
                <div 
                    className={styles.leftSide}
                    style={{ backgroundColor: fill ? "rgba(0, 0, 0, .05)" : "#FFF" }}
                >
                    <Icon
                        color={fill ? "#FFF" : color}
                        icon={leftIcon}
                        width={24}
                        height={24}
                    />
                </div>
            }
        
            <div 
                className={styles.centerSide}
                style={{ color: fill ? "#FFF" : "#1B1B1B" }}
            >
                {value}
            </div>

            {rightIcon && 
                <div className={styles.rightSide}>
                     <Icon
                        color={color}
                        icon={rightIcon}
                        width={24}
                        height={24}
                    />
                </div>
            }
        </div>
    )
}