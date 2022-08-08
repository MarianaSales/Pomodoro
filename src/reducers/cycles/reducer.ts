import { Cycle } from "../../context/CyclesContext"
import { ActionsTypes } from "./actions"

interface CycleState {
    cycles: Cycle[]
    activeCycleId: string | null
}


export function cyclesReducers(state: CycleState, action: any) {
    switch (action.type) {
        case ActionsTypes.ADD_NEW_CYCLE:
            return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id,
            }
        case ActionsTypes.INTERRUPT_CURRENT_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                    if (cycle.id === state.activeCycleId) {
                        return { ...cycle, interrupteDate: new Date() }
                    } else {
                        return cycle
                    }
                }),
                activeCycleId: null,
            }
        case ActionsTypes.MARK_CURRENT_CYCLE_AS_FINESHED:
            return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                    if (cycle.id === state.activeCycleId) {
                        return { ...cycle, finishedDate: new Date() }
                    } else {
                        return cycle
                    }
                }),
                activeCycleId: null,
            }
        default:
            return state
    }
}