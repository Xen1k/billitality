import "./PersonSpending.scss";
import Form from 'react-bootstrap/Form';
import CircleButton from "../../../components/CircleButton/CircleButton";
import { IPersonSpending, spending } from "./PersonSpendingController";


interface IPersonSpendingViewProps {
    addSpend: () => void;
    setSpend: (e: React.ChangeEvent<HTMLInputElement>, spending: spending) => void;
    setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    personSpendingData: IPersonSpending;
}

const PersonSpendingView: React.FC<IPersonSpendingViewProps> = ({ addSpend, personSpendingData, setSpend, setName }) => (
    <Form className="person-spending-container shadow">
        <p className="text-header"> Персона 1 </p>
        <Form.Group>
            <Form.Label className="form-label">Имя</Form.Label>
            <Form.Control
                className="form-input shadow mb-4"
                type="text"
                placeholder="Введите имя"
                onChange={e => setName(e as any)}
            />
            <Form.Label className="form-label">Траты</Form.Label>
            <div className="form-spending-inputs-container">
                {personSpendingData.spendingList.map(spending =>
                    <Form.Control
                        key={spending.id}
                        value={spending.value}
                        onChange={e => setSpend(e as any, spending)}
                        className="form-input text-theme shadow"
                        type="number"
                        placeholder="Введите счёт"
                    />
                )}
            </div>
            <CircleButton size={40} onClick={() => addSpend()} />
        </Form.Group>
    </Form >
)

export default PersonSpendingView;