import { ArgTypes } from '@storybook/react';

const DISABLED = { table: { disable: true } };
const hideControls = (...properties: string[]): ArgTypes =>
  properties.reduce((acc, p) => ({ ...acc, [p]: DISABLED }), {});

export default hideControls;
