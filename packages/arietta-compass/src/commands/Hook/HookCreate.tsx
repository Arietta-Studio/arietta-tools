import { Alert, Spinner } from '@inkjs/ui';
import { useTheme } from '@arietta-studio/arietta-cli-ui';
import { Text } from 'ink';
import fs from 'node:fs';
import process from 'node:process';
import { memo, useEffect, useState } from 'react';

import { HOOK } from '@/constants/hook';
import getAbsoluteHooksPath, { ERROR_CODE } from '@/utils/getAbsoluteHooksPath';

const HookCreate = memo(() => {
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useTheme();
  try {
    useEffect(() => {
      const hookFile = getAbsoluteHooksPath(HOOK.FILENAME);
      if (hookFile === ERROR_CODE) process.exit(1);
      fs.writeFileSync(hookFile, HOOK.CONTENTS, { mode: HOOK.PERMISSIONS });
      setLoading(false);
    }, []);
    if (loading) return <Spinner label=" Loading..." />;
    return (
      <Alert variant="success">
        {` arietta-compass hook `}
        <Text color={theme.colorSuccess}>created</Text>
        {` successfully!`}
      </Alert>
    );
  } catch {
    return <Alert variant="error">{` arietta-compass commit hook is not created`}</Alert>;
  }
});

export default HookCreate;
