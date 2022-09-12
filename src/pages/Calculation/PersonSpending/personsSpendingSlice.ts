import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IPersonSpending } from "./PersonSpendingController";

type PersonsSpendingSliceState = { spendingList: IPersonSpending[] };

const personsSoendingSlice: Slice = createSlice({
    name: 'personsSpendingSlice' as string,
    initialState: { spendingList: [] } as PersonsSpendingSliceState,
    reducers: {
        setPersonSpending(state: PersonsSpendingSliceState, action: PayloadAction<IPersonSpending>): void {
            let spendingList: IPersonSpending[] = state.spendingList;
            spendingList[spendingList.indexOf(action.payload)] = action.payload;
            state.spendingList = spendingList;
        }
    }
})

export default personsSoendingSlice.reducer;
export const { setPersonSpending } = personsSoendingSlice.actions;