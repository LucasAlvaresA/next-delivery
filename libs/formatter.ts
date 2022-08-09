export const formatter = () => ({
    formatPrice: (price: number) => {
        return price.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
        });
    },

    formatQuantity: (qt: number, minDigts: number) => {
        if(qt.toString().length >= minDigts) return qt.toString();
        const remain = minDigts - qt.toString().length;
        return `${"0".repeat(remain)}${qt}`;
    }
});