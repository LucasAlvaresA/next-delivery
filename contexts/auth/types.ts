import { Dispatch, ReactNode } from "react";
import { User } from "../../types/User";

export type DataType = {
    token: string;
    user: User | null;
}

export type ActionType = {
    type: Actions;
    payload?: any;
}

export type ContextType = {
    state: DataType;
    dispatch: Dispatch<ActionType>;
}

export type ProviderType = {
    children: ReactNode;
}

export enum Actions {
    SET_TOKEN,
    SET_USER
}