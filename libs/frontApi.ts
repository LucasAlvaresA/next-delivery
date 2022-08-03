export type getTenantResponse = {
    name: string;
    mainColor: string;
    secondColor: string;
}

export const frontApi = () => ({

    getTenant: (tenantSlug: string): boolean | getTenantResponse => {
        switch(tenantSlug) {
            case 'delivery-burger':
                return {
                    name: 'delivery-burger',
                    mainColor: '#FF0000',
                    secondColor: '#00FF00'
                }
            break;
            case 'delivery-pizza':
                return {
                    name: 'delivery-pizza',
                    mainColor: '#0000FF',
                    secondColor: '#FF0000'
                }
            break;
            default: return false;
        }
    }

});