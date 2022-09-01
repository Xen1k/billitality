import "./PersonSpending.scss";
import Form from 'react-bootstrap/Form';


interface ILabledInputProps {
    title: string;
    placeholder: string;
    color?: string;
}

const LabledInput: React.FC<ILabledInputProps> = ({ title, placeholder, color }) => (
    <Form.Group className="mb-3">
        <Form.Label>{title}</Form.Label>
        <Form.Control type="text" placeholder={placeholder} />
    </Form.Group>

)

const PersonSpendingView = (): JSX.Element => (
    <Form className="person-spending-container shadow">
        <p className="text-header"> Персона 1 </p>
        <LabledInput title="Имя" placeholder="Введите имя" />
    </Form>
)

export default PersonSpendingView;