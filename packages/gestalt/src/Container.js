// @flow strict
import * as React from 'react';
import Box from './Box.js';

type Props = {|
  children?: React.Node,
|};

export default function Container(props: Props): React.Node {
  const { children } = props;
  return (
    <Box justifyContent="center" display="flex">
      <Box maxWidth={800} width="100%">
        {children}
      </Box>
    </Box>
  );
}
