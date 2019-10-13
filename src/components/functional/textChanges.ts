export const toCapitalize = (str: string) => {
    if (typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const removeSpaces = (str: string): string => {
    str = str.replace(/\s+/g, '-')
    if (str.substring(str.length - 1, str.length) === "-") {
        do {
            str = str.substring(0, str.length - 1)
        } while (str.substring(str.length - 1, str.length) === "-")
    }
    return str
}