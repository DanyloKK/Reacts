export const helper = (values) => {
    if(values && values.length < 5) {
        return "Minimal value is 5"
    }
    return null;
}