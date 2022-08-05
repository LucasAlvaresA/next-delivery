import MailSend from "./mailSend.svg";

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
            {icon === "mailSend" && <MailSend color={color} />}
        </div>
    );
}