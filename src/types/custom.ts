import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

type Attributes<T> = T extends HTMLInputElement
  ? InputHTMLAttributes<T>
  : T extends HTMLTextAreaElement
  ? TextareaHTMLAttributes<T>
  : T extends HTMLButtonElement
  ? ButtonHTMLAttributes<T>
  : HTMLAttributes<T>;

type DefaultProps<T> = DetailedHTMLProps<Attributes<T>, T>;

interface ISelectOption {
  label: string;
  value: string;
}

export { type DefaultProps, type ISelectOption };
