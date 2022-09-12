import { useState } from "react";
import useAppDispatch, { AppDispatch } from "../../../hooks/useAppDispatch";
import PersonSpendingView from "./PersonSpendingView";
import nextId from "react-id-generator";


export type spending = { value: number, id: string };

export interface IPersonSpending {
    name: string;
    spendingList: spending[];
    id: string;
}

interface IPersonSpendingControllerProps {
    id: string;
}

const PersonSpendingController: React.FC<IPersonSpendingControllerProps> = ({ id }) => {

    const [personSpending, setPersonSpending] = useState<IPersonSpending>({ name: '', spendingList: [{ value: 0, id: 'id-0' }], id: id });
    const dispatch: AppDispatch = useAppDispatch();

    const addSpend = (): void => setPersonSpending({
        ...personSpending,
        spendingList: [...personSpending.spendingList, { value: 0, id: nextId() }]
    })

    const setName = (e: React.ChangeEvent<HTMLInputElement>): void => setPersonSpending({
        ...personSpending,
        name: e.target.value
    })

    const setSpend = (e: React.ChangeEvent<HTMLInputElement>, spending: spending): void => {
        let modifiedList: spending[] = personSpending.spendingList;
        modifiedList[modifiedList.indexOf(spending)].value = parseInt(e.target.value);
        setPersonSpending({
            ...personSpending,
            spendingList: modifiedList
        });
        console.log(personSpending.id);
    }



    return <PersonSpendingView
        addSpend={addSpend}
        setSpend={setSpend}
        setName={setName}
        personSpendingData={personSpending}
    />
}


export default PersonSpendingController;