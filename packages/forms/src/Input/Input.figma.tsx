import React from 'react';
import figma from '@figma/code-connect';
import Input from './Component';

figma.connect(Input, 'https://figma.com/component-url-placeholder', {
  props: {
    placeholder: figma.string('Placeholder'),
    type: figma.enum('Type', {
      Text: 'text',
      Email: 'email',
      Password: 'password',
      Number: 'number',
      Search: 'search',
      Tel: 'tel',
      URL: 'url',
      Date: 'date',
    }),
    disabled: figma.boolean('Disabled'),
    invalid: figma.boolean('Invalid'),
    required: figma.boolean('Required'),
  },
  example: ({ placeholder, type, disabled, invalid, required }) => (
    <Input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      invalid={invalid}
      required={required}
    />
  ),
});