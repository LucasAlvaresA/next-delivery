import { Product } from "../types/Product";
import { Tenant } from "../types/Tenant";
import { User } from "../types/User";

const TEMPORARYoneProduct: Product = {
    id: 1,
    image: '/temp/burger.png',
    categoryName: 'Tradicional',
    name: 'X-Burger',
    price: 25.50,
    description: '2 Blends de carne de 150g, Queijo Cheddar,Bacon Caramelizado, Salada, Molho da casa,Pão brioche artesanal'
}

export const frontApi = (tenantSlug: string) => ({

    getTenant: async (): Promise<boolean | Tenant> => {
        switch(tenantSlug) {
            case 'NextBurger':
                return {
                    slug: 'NextBurger',
                    name: 'NextBurger',
                    mainColor: '#FB9400',
                    secondColor: '#FFF9F2'
                }
            case 'NextPizza':
                return {
                    slug: 'NextPizza',
                    name: 'NextPizza',
                    mainColor: '#6AB70A',
                    secondColor: '#E0E0E0'
                }
            default: return false;
        }
    },

    getAllProducts: async () => {
        let products = [];
        for (let q = 0; q < 10; q++) {
            products.push({
                ...TEMPORARYoneProduct,
                id: q + 1
            });
        }
        return products;
    },

    getProduct: async (id: number) => {
        return {...TEMPORARYoneProduct, id};
    },

    authorizeToken: async (token: string): Promise<User | false> => {
        if (!token) return false;

        return {
            name: 'Test User',
            email: 'teste@teste.com'
        }
    }

});