import { useState, useEffect } from "react";
import CalculationView from "./CalculationView";
import { NavigateFunction, useNavigate, useLocation, Location } from 'react-router-dom';
import { IPersonSpending } from "./PersonSpending/PersonSpendingController";
import useAppSelector from "../../hooks/useAppSelector";
import { AppState } from "../../app/store";
import { resetId } from "react-id-generator";

const CalculationController = (): JSX.Element => {

    const spendingList: IPersonSpending = useAppSelector((state: AppState) => state.personsSpendingReducer.spendingList);

    const [numOfPersons, setNumOfPersons] = useState<number>(1);
    const maxNumOfPersons: number = 12;

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        resetId();
    }, [numOfPersons])

    const handleNumOfPersonsInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue: number = parseInt(e.target.value);
        if (inputValue > 0) {
            if (inputValue <= maxNumOfPersons)
                setNumOfPersons(parseInt(e.target.value));
            else if (parseInt(e.target.value[e.target.value.length - 1]) > 0)
                setNumOfPersons(parseInt(e.target.value[e.target.value.length - 1]));
        }
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.clear();
        console.log(spendingList);
        // navigate('/transactions');
    }

    return (
        <CalculationView
            numOfPersons={numOfPersons}
            handleNumOfPersonsInput={handleNumOfPersonsInput}
            onSubmit={onSubmit}
        />
    )
}

export default CalculationController;