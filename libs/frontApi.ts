import { Tenant } from "../types/Tenant";

export const frontApi = () => ({

    getTenant: (tenantSlug: string): boolean | Tenant => {
        switch(tenantSlug) {
            case 'NextBurger':
                return {
                    slug: 'NextBurger',
                    name: 'NextBurger',
                    mainColor: '#FF0000',
                    secondColor: '#00FF00'
                }
            break;
            case 'NextPizza':
                return {
                    slug: 'NextPizza',
                    name: 'NextPizza',
                    mainColor: '#0000FF',
                    secondColor: '#FF0000'
                }
            break;
            default: return false;
        }
    }

});