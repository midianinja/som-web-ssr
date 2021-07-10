export const accentFold = (inStr) => inStr.replace(
  /([àáâãäå])|([çčć])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g,
  (str, a, c, e, i, n, o, s, u, y, ae) => {
    if (a) return 'a';
    if (c) return 'c';
    if (e) return 'e';
    if (i) return 'i';
    if (n) return 'n';
    if (o) return 'o';
    if (s) return 's';
    if (u) return 'u';
    if (y) return 'y';
    if (ae) return 'ae';
  }
);

export default accentFold;
