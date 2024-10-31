export const formatCurrency = (currency: number)=> {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        compactDisplay: 'short',
        maximumFractionDigits: 0
    }).format(currency)
}