import { useState } from "react";
import PersonSpendingView from "./PersonSpendingView";



interface IPersonSpending {
    name: string;
    spendingList: number[];
}

const PersonSpendingController = (): JSX.Element => {

    const [personSpending, setPersonSpending] = useState<IPersonSpending>({ name: '', spendingList: [0] });


    const AddSpend = (): void => setPersonSpending({ ...personSpending, spendingList: [...personSpending.spendingList, 0] })

    return <PersonSpendingView />
}

export default PersonSpendingController;