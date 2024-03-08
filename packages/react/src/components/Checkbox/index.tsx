import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ComponentProps } from 'react'

export type CheckBoxProps = ComponentProps<typeof CheckboxContainer>

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckboxContainer {...props}>
      {/* asChild funciona como o fragment do react, ele serve para ser usado 
      quando não queremos criar um component em tela  
      */}
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
