import "./PersonSpending.scss";
import Form from 'react-bootstrap/Form';
import CircleButton from "../../../components/CircleButton/CircleButton";


const PersonSpendingView = (): JSX.Element => (
    <Form className="person-spending-container shadow">
        <p className="text-header"> Персона 1 </p>
        <Form.Group style={{ display: 'flex', flexDirection: 'column', height: '100%' }} className="mb-3 pb-4">
            <div style={{ flex: 6 }}>
                <Form.Label className="form-label">Имя</Form.Label>
                <Form.Control className="form-input shadow mb-4" type="text" placeholder="Введите имя" />
                <Form.Label className="form-label">Траты</Form.Label>
                <Form.Control className="form-input text-theme shadow" type="number" placeholder="Введите счёт" />
            </div>
            <div style={{ flex: 1, justifyContent: 'flex-end' }}>
                <CircleButton size={40} onClick={() => { }} />
            </div>
        </Form.Group>
    </Form >
)

export default PersonSpendingView;