import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from '../../assets/themes/tokens.stylex';
import { dracula } from '../../assets/themes';
import { ReactNode } from 'react';

const styles = stylex.create({
  container: {
    color: colors.primaryText,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
});

export default function Sample(props: TProps) {
  return (<div {...stylex.props(dracula, styles.container)}>{props?.children}</div>)
}
type TProps = { children: ReactNode }