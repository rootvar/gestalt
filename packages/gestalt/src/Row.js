// @flow strict
import * as React from 'react';
import FlexBox from './FlexBox.js';
import Box, {
  type AlignContent,
  type AlignItems,
  type AlignSelf,
  type Dimension,
  type Flex,
  type JustifyContent,
  type Overflow,
  type Padding,
} from './Box.js';

type Props = {|
  alignContent?: AlignContent,
  alignItems?: AlignItems,
  alignSelf?: AlignSelf,
  children?: React.Node,
  flex?: Flex,
  gap?: Padding,
  height?: Dimension,
  justifyContent?: JustifyContent,
  maxHeight?: Dimension,
  maxWidth?: Dimension,
  minHeight?: Dimension,
  minWidth?: Dimension,
  overflow?: Overflow,
  width?: Dimension,
  wrap?: boolean,
|};

export default function Row({
  alignItems = 'center',
  children,
  gap = 0,
  height,
  justifyContent = 'start',
  width,
  ...rest
}: Props): React.Node {
  return (
    <Box
      height={height}
      marginStart={gap ? -gap : 0}
      marginEnd={gap ? -gap : 0}
      width={width}
    >
      <FlexBox
        alignItems={alignItems}
        direction="row"
        height={height}
        justifyContent={justifyContent}
        width={width}
        {...rest}
      >
        {React.Children.map(children, child =>
          child !== null && child !== undefined ? (
            <Box paddingX={gap}>{child}</Box>
          ) : null
        )}
      </FlexBox>
    </Box>
  );
}
