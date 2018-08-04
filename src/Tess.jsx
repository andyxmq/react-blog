import React from 'react';

import styled from 'styled-components'

const StyledCounter = styled.div`
  font-size: 0.8rem;
  font-family: "Operator Mono SSm A","Operator Mono SSm B",monospace;
  color: palevioletred;
`
const Paragraph = styled.p`

`
const Button = styled.button`

`

class Counter extends React.Component { // eslint-disable-line
	render() {
/* eslint-disable */
  	return (
      <StyledCounter>
        <Paragraph>1 aaaa</Paragraph>
        <Button>+</Button>
        <Button>-</Button>
      </StyledCounter>
  	)
  }
  /* eslint-enable */
}

export default Counter
