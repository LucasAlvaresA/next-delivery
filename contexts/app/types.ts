import { Dispatch, ReactNode } from "react";
import { Address } from "../../types/Address";
import { Tenant } from "../../types/Tenant"

export type DataType = {
    tenant : Tenant | null;
    shippingAddress: Address | null;
    shippingPrice: number;
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
    SET_TENANT,
    SET_SHIPPING_ADDRESS,
    SET_SHIPPING_PRICE
}