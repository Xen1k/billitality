import { useState } from "react";
import PersonSpendingView from "./PersonSpendingView";



export type spending = { value: number, id: number };

export interface IPersonSpending {
    name: string;
    spendingList: spending[];
}

const PersonSpendingController = (): JSX.Element => {

    const [personSpending, setPersonSpending] = useState<IPersonSpending>({ name: '', spendingList: [{ value: 0, id: 0 }] });


    const addSpend = (): void => setPersonSpending({
        ...personSpending,
        spendingList: [...personSpending.spendingList, { value: 0, id: personSpending.spendingList.length }]
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
    }

    return <PersonSpendingView
        addSpend={addSpend}
        setSpend={setSpend}
        setName={setName}
        personSpendingData={personSpending}
    />
}


export default PersonSpendingController;