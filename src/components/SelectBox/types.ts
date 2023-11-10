export type SelectBoxOption = {
  id: number | string;
  value: string;
};

export type SelectBoxTheme = {
  backgroundColor: string;
  borderColor: string;
  border?: string;
  borderRadius?: string;
  focusRingColor: string;
  padding: string;
  textColor: string;
  width?: string;
};

export type SelectBoxProps = {
  /**
   * The name of the select box, useful for identifying the selectbox in forms.
   */
  id: string;
  /**
   * The name of the select box, useful for identifying the selectbox in forms.
   */
  name: string;

  /**
   * A callback function that is called when an option is selected. It receives the selected option as an argument.
   */
  onChange: (option: SelectBoxOption) => void;

  /**
   * An array of radio options to be rendered within the group.
   */
  options: SelectBoxOption[];

  /**
   * The placeholder for the selectbox.
   */
  placeholder?: string;

  /**
   * Indicates whether it is mandatory to make a selection
   */
  required?: boolean;
  /**
   * The currently selected radio option. This option will be visually indicated as selected.
   */
  selectedOption?: SelectBoxOption;

  /**
   * The theme configuration for styling the radio group.
   */
  theme: SelectBoxTheme;
};
