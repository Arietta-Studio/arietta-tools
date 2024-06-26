import { Badge } from '@inkjs/ui';
import { useTheme } from '@arietta-studio/arietta-cli-ui';
import { Text } from 'ink';
import { memo } from 'react';

interface HeaderProps {
  step: number;
  steps: number;
  title: string;
}
const Header = memo<HeaderProps>(({ step, steps, title }) => {
  const theme = useTheme();
  return (
    <Text>
      <Badge color={theme.colorText}>{`${step}/${steps}`}</Badge>
      <Text bold>{` ${title.toUpperCase()}`}</Text>
    </Text>
  );
});

export default Header;
