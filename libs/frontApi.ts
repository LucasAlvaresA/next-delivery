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
    },

    getAllProducts: async () => {
        let products = [];
        for (let q = 0; q < 10; q++) {
            products.push(TEMPORARYoneProduct);
        }
        return products;
    },

    getProduct: async (id: string) => {
        return TEMPORARYoneProduct;
    },

    authorizeToken: async (token: string): Promise<User | false> => {
        if (!token) return false;

        return {
            name: 'Test User',
            email: 'teste@teste.com'
        }
    }

});