import "./PersonSpending.scss";
import Form from 'react-bootstrap/Form';
import CircleButton from "../../../components/CircleButton/CircleButton";
import { IPersonSpending } from "./PersonSpendingController";


interface IPersonSpendingViewProps {
    addSpend: () => void;
    personSpendingData: IPersonSpending;
}

const PersonSpendingView: React.FC<IPersonSpendingViewProps> = ({ addSpend, personSpendingData }) => (
    <Form className="person-spending-container shadow">
        <p className="text-header"> Персона 1 </p>
        <Form.Group style={{ display: 'flex', flexDirection: 'column', height: '100%' }} className="mb-3 pb-4">
            <div style={{ flex: 6 }}>
                <Form.Label className="form-label">Имя</Form.Label>
                <Form.Control className="form-input shadow mb-4" type="text" placeholder="Введите имя" />
                <Form.Label className="form-label">Траты</Form.Label>
                <div className="form-spending-inputs-container">
                    {personSpendingData.spendingList.map(spending =>
                        <Form.Control key={spending.id} className="form-input text-theme shadow" type="number" placeholder="Введите счёт" />
                    )}
                </div>
            </div>
            <div style={{ flex: 1, justifyContent: 'flex-end' }}>
                <CircleButton size={40} onClick={() => addSpend()} />
            </div>
        </Form.Group>
    </Form >
)

export default PersonSpendingView;