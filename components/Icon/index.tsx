import Card from "./card.svg";
import Checked from "./checked.svg";
import Cupom from "./cupom.svg";
import Delete from "./delete.svg";
import Dots from "./dots.svg";
import Edit from "./edit.svg";
import Location from "./location.svg";
import MailSend from "./mailSend.svg";
import Money from "./money.svg";
import RightArrow from "./rightArrow.svg";

type Props = {
    icon: string;
    color: string;
    width: number;
    height: number;
}

export const Icon = ({ icon, color, width, height }: Props) => {
    return (
        <div
            style={{ width, height }}
        >
            {icon === "card" && <Card color={color} />}
            {icon === "checked" && <Checked color={color} />}
            {icon === "cupom" && <Cupom color={color} />}
            {icon === "delete" && <Delete color={color} />}
            {icon === "dots" && <Dots color={color} />}
            {icon === "edit" && <Edit color={color} />}
            {icon === "location" && <Location color={color} />}
            {icon === "mailSend" && <MailSend color={color} />}
            {icon === "money" && <Money color={color} />}
            {icon === "rightArrow" && <RightArrow color={color} />}
        </div>
    );
}