const capitaliseString = (value) => {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
}
export default capitaliseString;