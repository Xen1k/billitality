import Button from 'react-bootstrap/Button';
import './CircleButton.scss';

interface ICircleButtonProps {
    onClick(): void;
    size?: number;
}

const CircleButton: React.FC<ICircleButtonProps> = ({ onClick, size }) => {

    return (
        <Button
            onClick={onClick}
            style={{ width: size || 70, height: size || 70 }}
            className="circle-button shadow"
        >
            +
        </Button>
    );
}

export default CircleButton;