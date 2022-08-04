import { Tenant } from "../types/Tenant";

export const frontApi = () => ({

    getTenant: (tenantSlug: string): boolean | Tenant => {
        switch(tenantSlug) {
            case 'delivery-burger':
                return {
                    slug: 'delivery-burger',
                    name: 'delivery-burger',
                    mainColor: '#FF0000',
                    secondColor: '#00FF00'
                }
            break;
            case 'delivery-pizza':
                return {
                    slug: 'delivery-pizza',
                    name: 'delivery-pizza',
                    mainColor: '#0000FF',
                    secondColor: '#FF0000'
                }
            break;
            default: return false;
        }
    }

});