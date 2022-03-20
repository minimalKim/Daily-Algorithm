const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return (n) => {
    let [lt, rt] = [0, n];
    while (lt < rt) {
      let md = Math.floor((lt + rt) / 2);

      if (isBadVersion(md)) {
        rt = md;
      } else {
        if (lt === md) return rt;
        lt = md;
      }
    }
  };
};
