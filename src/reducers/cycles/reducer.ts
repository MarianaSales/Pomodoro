import { produce } from 'immer'
import { Cycle } from "../../context/CyclesContext"
import { ActionsTypes } from "./actions"

interface CycleState {
    cycles: Cycle[]
    activeCycleId: string | null
}


export function cyclesReducers(state: CycleState, action: any) {
    switch (action.type) {
        case ActionsTypes.ADD_NEW_CYCLE:
            return produce(state, draft => {
                draft.cycles.push(action.payload.newCycle);
                draft.activeCycleId = action.payload.newCycle.id
            })
        case ActionsTypes.INTERRUPT_CURRENT_CYCLE:
            const currentCycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })
            if (currentCycleIndex < 0) {
                return state
            }
            return produce(state, (draft) => {
                draft.activeCycleId = null,
                    draft.cycles[currentCycleIndex].interrupteDate = new Date()
            })
        case ActionsTypes.MARK_CURRENT_CYCLE_AS_FINESHED:
            const currCycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })
            if (currCycleIndex < 0) {
                return state
            }
            return produce(state, (draft) => {
                draft.activeCycleId = null,
                    draft.cycles[currCycleIndex].finishedDate = new Date()
            })
        default:
            return state
    }
}