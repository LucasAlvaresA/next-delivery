import styles from './styles.module.css';
import CartIcon from './icons/cart.svg';
import ConfigIcon from './icons/config.svg';
import FavIcon from './icons/fav.svg';
import LogoutIcon from './icons/logout.svg';
import MenuIcon from './icons/menu.svg';
import OrderIcon from './icons/order.svg';

type Props = {
    color: string;
    label: string;
    icon: 'cart' | 'config' | 'fav' | 'logout' | 'menu' | 'order';
    onClick: () => void;
    disabled?: boolean;
}

export const SidebarMenuItem = ({color, label, icon, onClick, disabled}: Props) => {
    return (
        <div className={styles.container} onClick={onClick}>
            {icon === 'cart' && <CartIcon color={color} />}
            {icon === 'config' && <ConfigIcon color={color} />}
            {icon === 'fav' && <FavIcon color={color} />}
            {icon === 'logout' && <LogoutIcon color={color} />}
            {icon === 'menu' && <MenuIcon color={color} />}
            {icon === 'order' && <OrderIcon color={color} />}
            <span className={disabled ? styles.disabled : ''}>{label}</span>
        </div>
    )
}