function formatToCSSVar(str: string) {
    return str.toLowerCase().replace(/\./g, '');
}

export {formatToCSSVar}