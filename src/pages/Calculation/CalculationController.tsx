import { useState } from "react";
import CalculationView from "./CalculationView";

const CalculationController = (): JSX.Element => {

    const [numOfPersons, setNumOfPersons] = useState<number>(1);

    const maxNumOfPersons: number = 12;

    const handleNumOfPersonsInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue: number = parseInt(e.target.value);
        if (inputValue <= maxNumOfPersons && inputValue > 0)
            setNumOfPersons(parseInt(e.target.value));
    }

    return (
        <CalculationView
            numOfPersons={numOfPersons}
            handleNumOfPersonsInput={handleNumOfPersonsInput}
        />
    )
}

export default CalculationController;