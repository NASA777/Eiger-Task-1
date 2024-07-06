function computeZArray(s: string): number[] {
    const n = s.length;
    const Z = new Array(n).fill(0);
    let L = 0,
        R = 0,
        K: number;

    for (let i = 1; i < n; i++) {
        if (i > R) {
            L = R = i;
            while (R < n && s[R] === s[R - L]) {
                R++;
            }
            Z[i] = R - L;
            R--;
        } else {
            K = i - L;
            if (Z[K] < R - i + 1) {
                Z[i] = Z[K];
            } else {
                L = i;
                while (R < n && s[R] === s[R - L]) {
                    R++;
                }
                Z[i] = R - L;
                R--;
            }
        }
    }
    Z[0] = n;
    return Z;
}

export function commonPrefix(str: string): [string, number[], number] {
    const resp: number[] = computeZArray(str);
    const total: number = resp.reduce((acc, val) => acc + val);
    return [str, resp, total];
}

export function onlyLetters(str: string): string {
    return str.replace(/[^a-zA-Z]/g, "");
}
