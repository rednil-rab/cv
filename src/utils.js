export const createRegExpTest = (string) => {
    let test = new RegExp(string);
    return test;
}

export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);