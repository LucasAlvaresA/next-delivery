import { Address } from "../../types/Address";
import { Icon } from "../Icon";
import styles from "./styles.module.css"

type Props = {
    color: string;
    address: Address;
    onSelect: (address: Address) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    menuOpened: number;
    setMenuOpened:(id: number) => void ;
}

export const AddressItem = ({ color, address, onSelect, onEdit, onDelete, menuOpened, setMenuOpened }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.addressArea} onClick={() => onSelect(address)}>
                <div className={styles.addressIcon}>
                    <Icon 
                        color={color}
                        icon="location"
                        width={24}
                        height={24}
                    />
                </div>
                <div className={styles.addressText}>
                    {`${address.street} ${address.number}, ${address.city}`}
                </div>
            </div>
            <div>
                <div className={styles.menuIcon} onClick={() => setMenuOpened(address.id)}>
                    <Icon 
                        color={color}
                        icon="dots"
                        width={24}
                        height={24}
                    />
                </div>
                {menuOpened ===  address.id && 
                  <div className={styles.popup}>
                    <div className={styles.popupItem} onClick={() => onEdit(address.id)}>
                        <div className={styles.popupIcon}>
                            <Icon 
                                color="#96A3AB"
                                icon="edit"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className={styles.popupText}>Editar</div>
                    </div>
                    <div className={styles.popupItem} onClick={() => onDelete(address.id)}>
                        <div className={styles.popupIcon}>
                            <Icon 
                                color="#96A3AB"
                                icon="delete"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className={styles.popupText}>Excluir</div>
                    </div>
                  </div>
                }
                
            </div>
        </div>
    );
}