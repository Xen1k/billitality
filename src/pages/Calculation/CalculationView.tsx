import Form from 'react-bootstrap/Form';
import PersonSpendingController from "./PersonSpending/PersonSpendingController";
import "./Calculation.scss";
import Button from 'react-bootstrap/Button';
import nextId from "react-id-generator";

interface ICalculationViewProps {
    numOfPersons: number;
    handleNumOfPersonsInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CalculationView: React.FC<ICalculationViewProps> = ({ numOfPersons, handleNumOfPersonsInput, onSubmit }) => (
    <div className='calculation-page-container'>
        <Form.Control
            className="input shadow mb-4"
            type="number"
            placeholder="Введите количество человек"
            value={numOfPersons}
            onChange={e => handleNumOfPersonsInput(e as any)}
        />
        <div className='persons-spendings-container'>
            {[...Array(numOfPersons)].map(() => {
                let id: string = nextId();
                return <PersonSpendingController id={id} key={id} />
            })}
        </div>

        <Button className='submit-button shadow' onClick={(e) => onSubmit(e as any)}> Далее </Button>
    </div>
)

export default CalculationView;