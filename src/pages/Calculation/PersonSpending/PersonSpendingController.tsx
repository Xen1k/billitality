import { useState } from "react";
import PersonSpendingView from "./PersonSpendingView";



export interface IPersonSpending {
    name: string;
    spendingList: { value: number, id: number }[];
}

const PersonSpendingController = (): JSX.Element => {

    const [personSpending, setPersonSpending] = useState<IPersonSpending>({ name: '', spendingList: [{ value: 0, id: 0 }] });


    const addSpend = (): void => setPersonSpending({
        ...personSpending,
        spendingList: [...personSpending.spendingList, { value: 0, id: personSpending.spendingList.length }]
    })

    return <PersonSpendingView addSpend={addSpend} personSpendingData={personSpending} />
}

export default PersonSpendingController;