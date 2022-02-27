import React from 'react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Primary = () => <Button onClick={() => alert('test')}>Test</Button>;
