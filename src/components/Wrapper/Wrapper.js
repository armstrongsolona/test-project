import React from 'react';
import Box from '@bit/solona.components.box';
import Button from '@bit/solona.components.button';
import Text from '@bit/solona.components.text';

export default function Wrapper() {
    return (
        <Box>
            <Text fontFamily="Verdana" fontSize="24px">Bit Demo</Text>
            <Button>
                <Text>Button</Text>
            </Button>
        </Box>
    );
}