// @flow strict

import * as React from 'react';
import Box from './Box.js';
import Text from './Text.js';

export default function FormErrorMessage({
  id,
  text = '',
}: {|
  id: string,
  text?: string,
|}): React.Node {
  return (
    <Box marginTop={2}>
      <Text color="red" size="sm">
        <span id={`${id}-error`}>{text}</span>
      </Text>
    </Box>
  );
}
