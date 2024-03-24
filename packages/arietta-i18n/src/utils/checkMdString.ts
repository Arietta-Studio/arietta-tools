const IGNORE_LIST = new Set([
  '\n',
  '\r\n',
  '[!NOTE]',
  '[!IMPORTANT]',
  '[!WARNING]',
  '[!CAUTION]',
  '\\[!NOTE]',
  '\\[!IMPORTANT]',
  '\\[!WARNING]',
  '\\[!CAUTION]',
  '\\[!NOTE]\\',
  '\\[!IMPORTANT]\\',
  '\\[!WARNING]\\',
  '\\[!CAUTION]\\',
]);

export const checkMdString = (str: string) => {
  if (IGNORE_LIST.has(str)) return true;
  //
  let regex =
    /^[\s\p{P}\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}]*$/u;
  return regex.test(str.replaceAll(' ', ''));
};
