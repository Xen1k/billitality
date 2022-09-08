import Form from 'react-bootstrap/Form';
import PersonSpendingController from "./PersonSpending/PersonSpendingController";
import "./Calculation.scss";

interface ICalculationViewProps {
    numOfPersons: number;
    handleNumOfPersonsInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalculationView: React.FC<ICalculationViewProps> = ({ numOfPersons, handleNumOfPersonsInput }) => (
    <div className='calculation-page-container'>
        <Form.Control
            className="input shadow mb-4"
            type="number"
            placeholder="Введите количество человек"
            value={numOfPersons}
            onChange={e => handleNumOfPersonsInput(e as any)}
        />
        <div className='persons-spendings-container'>
            {[...Array(numOfPersons)].map(() => <PersonSpendingController />)}
        </div>
    </div>
)

export default CalculationView;