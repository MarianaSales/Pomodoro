import { Cycle } from "../../context/CyclesContext";

export enum ActionsTypes {
    ADD_NEW_CYCLE,
    INTERRUPT_CURRENT_CYCLE,
    MARK_CURRENT_CYCLE_AS_FINESHED,
}

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionsTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        },
    }
}

export function markCurrentAsFineshedAction() {
    return {
        type: ActionsTypes.MARK_CURRENT_CYCLE_AS_FINESHED,
    }
}

export function interruptCurrentCycleAction() {
    return {
        type: ActionsTypes.INTERRUPT_CURRENT_CYCLE,
    }
}