import { Dot, DotWrapper, Text } from './styled';

export function RLoader() {
  return (
    <>
      <DotWrapper>
        <Text>Loading</Text>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </>
  );
}
