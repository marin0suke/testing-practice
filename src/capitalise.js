export function capitalise(string) {
    
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// slice returns an empty string when passed an empty string - implicitly covers empty string edge case.
//