import { Address } from "../types/Address";
import { CartItem } from "../types/CartItem";
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
    },

    getCartProducts: async (cartCookie: string) => {
        let cart: CartItem[] = [];
        if(!cartCookie) return cart

        const cartJson = JSON.parse(cartCookie);
        for(let i in cartJson) {
            if(cartJson[i].id && cartJson[i].qt) {
                const product = {
                    ...TEMPORARYoneProduct,
                    id: cartJson[i].id
                }
                cart.push({
                    qt: cartJson[i].qt,
                    product
                })
            }
        }
        return cart;
    },

    getUserAddresses: async (email: string) => {
        const addresses: Address[] = [];

        for (let i = 0; i  < 4; i++) {
            addresses.push({
                id: i  + 1,
                street: "Rua das Flores",
                number: `${i + 1}00`,
                cep: "99999999",
                city: "São Paulo",
                neighborhood: "Jardins",
                state: "SP"
            })
        }

        return addresses;
    },

    getUserAddress: async (addressid: number) => {
        let address: Address = {
            id: addressid,
            street: "Rua das Flores",
            number: `${addressid}00`,
            cep: "99999999",
            city: "São Paulo",
            neighborhood: "Jardins",
            state: "SP"
        }
        return address;
    },

    addUserAddress: async (address : Address) => {
        console.log(address);
        return { ...address, id: 9};
    },

    editUserAddress: async (newAddressData: Address) => {
        return true;
    },

    getShippingPrice: async (address: Address) => {
        return 9.50
    }

});