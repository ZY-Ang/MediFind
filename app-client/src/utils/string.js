/**
 * Returns the Levenshtein distance between two strings
 * {@param a} and {@param b}.
 *
 * {@author http://rosettacode.org/wiki/Levenshtein_distance}
 */
export const levenshteinDistance = (a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    let t = [], u, i, j, m = a.length, n = b.length;
    if (!m) { return n; }
    if (!n) { return m; }
    for (j = 0; j <= n; j++) { t[j] = j; }
    for (i = 1; i <= m; i++) {
        for (u = [i], j = 1; j <= n; j++) {
            u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
        } t = u;
    } return u[n];
};