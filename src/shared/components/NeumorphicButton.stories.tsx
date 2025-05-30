import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

import { NeumorphicButton } from './NeumorphicButton';

const meta = {
    title: 'Components/NeumorphicButton',
    component: NeumorphicButton,
    args: {
        title: 'string',
        onPress: () => { console.log('clicked') },
        mode: 'primary',
        loading: true,
        icon: {} as any,
        disabled: true
    },
    decorators: [
        (Story) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof NeumorphicButton>
export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
    args: {},
    render: (args) => (
        <NeumorphicButton {...args} />
    ),
};

