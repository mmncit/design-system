import React from 'react';
import { StackProps } from './Stack.types';

export function Stack({
  children,
  spacing = 2,
  direction = 'row',
  wrap = 'nowrap',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
}: StackProps) {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap,
    flexDirection: direction,
    justifyContent,
    alignItems,
  };
  return <div style={style}>{children}</div>;
}
