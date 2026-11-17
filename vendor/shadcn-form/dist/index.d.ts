import * as React$1 from 'react';
import React__default, { Ref, ReactElement } from 'react';
import * as rc_field_form_lib_interface from 'rc-field-form/lib/interface';
import { NamePath, Rule, FormInstance, ValidatorRule, FieldData, ValidateMessages, ValidateErrorEntity, ValidateOptions, FormRef } from 'rc-field-form/lib/interface';
import { useForm, useWatch, FormInstance as FormInstance$1 } from 'rc-field-form';

type FormLayout = "horizontal" | "vertical" | "inline";
type FormSize = "small" | "middle" | "large";
type RequiredMark = boolean | "optional";
type ValidateStatus = "success" | "warning" | "error" | "validating";
type LabelAlign = "start" | "end";
type FormVariant = "outlined" | "filled" | "borderless" | "underlined";
type ColLike = {
    span?: number;
    offset?: number;
    xs?: {
        span?: number;
        offset?: number;
    };
    sm?: {
        span?: number;
        offset?: number;
    };
    md?: {
        span?: number;
        offset?: number;
    };
    lg?: {
        span?: number;
        offset?: number;
    };
    xl?: {
        span?: number;
        offset?: number;
    };
};
type ScrollToFirstErrorConfig = {
    focus?: boolean;
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
};
type FormProps<Values extends object = Record<string, unknown>> = {
    className?: string;
    style?: React__default.CSSProperties;
    name?: string;
    layout?: FormLayout;
    size?: FormSize;
    disabled?: boolean;
    requiredMark?: RequiredMark;
    variant?: FormVariant;
    colon?: boolean;
    labelAlign?: LabelAlign;
    labelWrap?: boolean;
    labelCol?: ColLike;
    wrapperCol?: ColLike;
    initialValues?: Partial<Values>;
    fields?: FieldData[];
    form?: FormInstance<Values>;
    component?: false | string | React__default.FC<unknown> | React__default.ComponentClass<unknown>;
    preserve?: boolean;
    validateMessages?: ValidateMessages;
    validateTrigger?: string | string[] | false;
    scrollToFirstError?: boolean | ScrollToFirstErrorConfig;
    clearOnDestroy?: boolean;
    children?: React__default.ReactNode;
    onValuesChange?: (changedValues: Partial<Values>, allValues: Values) => void;
    onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
    onFinish?: (values: Values) => void;
    onFinishFailed?: (errorInfo: ValidateErrorEntity<Values>) => void;
} & Omit<React__default.FormHTMLAttributes<HTMLFormElement>, "onFinish" | "onSubmit" | "size">;
type FormItemProps = {
    className?: string;
    style?: React__default.CSSProperties;
    name?: NamePath;
    label?: React__default.ReactNode;
    required?: boolean;
    hidden?: boolean;
    noStyle?: boolean;
    initialValue?: unknown;
    preserve?: boolean;
    dependencies?: NamePath[];
    rules?: Rule[];
    tooltip?: React__default.ReactNode;
    htmlFor?: string | null;
    labelAlign?: LabelAlign;
    labelCol?: ColLike;
    wrapperCol?: ColLike;
    validateTrigger?: string | string[] | false;
    validateDebounce?: number;
    validateFirst?: boolean | "parallel";
    shouldUpdate?: boolean | ((prevValues: unknown, nextValues: unknown) => boolean);
    valuePropName?: string;
    trigger?: string;
    normalize?: (value: unknown, prevValue: unknown, allValues: unknown) => unknown;
    getValueFromEvent?: (...args: unknown[]) => unknown;
    getValueProps?: (value: unknown) => Record<string, unknown>;
    help?: React__default.ReactNode;
    extra?: React__default.ReactNode;
    validateStatus?: ValidateStatus;
    messageVariables?: Record<string, string>;
    children?: React__default.ReactNode | ((form: FormInstance) => React__default.ReactNode);
};
type FormListProps = {
    name: NamePath;
    initialValue?: unknown[];
    rules?: ValidatorRule[];
    validateTrigger?: string | string[] | false;
    children: (fields: Array<{
        name: number;
        key: number;
        isListField: boolean;
    }>, operation: {
        add: (defaultValue?: unknown, insertIndex?: number) => void;
        remove: (index: number | number[]) => void;
        move: (from: number, to: number) => void;
    }, meta: {
        errors: React__default.ReactNode[];
        warnings: React__default.ReactNode[];
    }) => React__default.ReactNode;
};
type FormProviderProps = {
    children: React__default.ReactNode;
    onFormChange?: (name: string, info: {
        changedFields: FieldData[];
        forms: Record<string, FormInstance>;
    }) => void;
    onFormFinish?: (name: string, info: {
        values: unknown;
        forms: Record<string, FormInstance>;
    }) => void;
};
type ValidateConfig = ValidateOptions;

type FormErrorListProps = {
    errors?: React__default.ReactNode[];
    warnings?: React__default.ReactNode[];
    className?: string;
};
declare function FormErrorList({ errors, warnings, className }: FormErrorListProps): React__default.JSX.Element | null;

declare function FormItem({ className, style, name, label, required, hidden, noStyle, initialValue, preserve, dependencies, rules, tooltip, htmlFor, labelAlign, labelCol, wrapperCol, validateTrigger, validateDebounce, validateFirst, shouldUpdate, valuePropName, trigger, normalize, getValueFromEvent, getValueProps, help, extra, validateStatus, messageVariables, children, }: FormItemProps): React$1.JSX.Element;

declare function FormList(props: FormListProps): React$1.JSX.Element;

declare function FormProvider(props: FormProviderProps): React$1.JSX.Element;

type ItemStatus = {
    status: "success" | "warning" | "error" | "validating" | undefined;
    errors: string[];
    warnings: string[];
};

declare function useItemStatus(): ItemStatus;

declare const BaseForm: React$1.ForwardRefExoticComponent<{
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    layout?: FormLayout;
    size?: FormSize;
    disabled?: boolean;
    requiredMark?: RequiredMark;
    variant?: FormVariant;
    colon?: boolean;
    labelAlign?: LabelAlign;
    labelWrap?: boolean;
    labelCol?: ColLike;
    wrapperCol?: ColLike;
    initialValues?: Partial<Record<string, unknown>> | undefined;
    fields?: rc_field_form_lib_interface.FieldData[];
    form?: rc_field_form_lib_interface.FormInstance<Record<string, unknown>> | undefined;
    component?: false | string | React.FC<unknown> | React.ComponentClass<unknown>;
    preserve?: boolean;
    validateMessages?: rc_field_form_lib_interface.ValidateMessages;
    validateTrigger?: string | string[] | false;
    scrollToFirstError?: boolean | ScrollToFirstErrorConfig;
    clearOnDestroy?: boolean;
    children?: React.ReactNode;
    onValuesChange?: ((changedValues: Partial<Record<string, unknown>>, allValues: Record<string, unknown>) => void) | undefined;
    onFieldsChange?: (changedFields: rc_field_form_lib_interface.FieldData[], allFields: rc_field_form_lib_interface.FieldData[]) => void;
    onFinish?: ((values: Record<string, unknown>) => void) | undefined;
    onFinishFailed?: ((errorInfo: rc_field_form_lib_interface.ValidateErrorEntity<Record<string, unknown>>) => void) | undefined;
} & Omit<React$1.FormHTMLAttributes<HTMLFormElement>, "onFinish" | "onSubmit" | "size"> & React$1.RefAttributes<FormRef>>;
type FormComponent = typeof BaseForm & {
    Item: typeof FormItem & {
        useStatus: typeof useItemStatus;
    };
    List: typeof FormList;
    ErrorList: typeof FormErrorList;
    Provider: typeof FormProvider;
    useForm: typeof useForm;
    useWatch: typeof useWatch;
    useFormInstance: <Values extends object = Record<string, unknown>>() => FormInstance$1<Values>;
};
declare const Form: FormComponent & (<Values extends object = Record<string, unknown>>(props: FormProps<Values> & {
    ref?: Ref<FormRef<Values>>;
}) => ReactElement);

type ControlSize = "small" | "middle" | "large";
type ControlVariant = "outlined" | "filled" | "borderless" | "underlined";

type PasswordInputProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
};
declare const PasswordInput: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
} & React__default.RefAttributes<HTMLInputElement>>;

type TextareaProps = React__default.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
};
declare const Textarea: React__default.ForwardRefExoticComponent<React__default.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
} & React__default.RefAttributes<HTMLTextAreaElement>>;

type InputProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
};
declare const Input: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
} & React__default.RefAttributes<HTMLInputElement>>;
type InputComponent = typeof Input & {
    Password: typeof PasswordInput;
    TextArea: typeof Textarea;
};
declare const InputWithParts: InputComponent;

type InputNumberProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "value" | "defaultValue"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number | undefined) => void;
};
declare const InputNumber: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "defaultValue" | "onChange" | "value"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number | undefined) => void;
} & React__default.RefAttributes<HTMLInputElement>>;

type SelectOption = {
    label: React__default.ReactNode;
    value: string | number;
    disabled?: boolean;
};
type SelectProps = Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
    options?: SelectOption[];
    mode?: "multiple" | "tags";
    onChange?: (value: string | string[], option?: SelectOption | SelectOption[] | undefined) => void;
};
declare const Select: React__default.ForwardRefExoticComponent<Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
    options?: SelectOption[];
    mode?: "multiple" | "tags";
    onChange?: (value: string | string[], option?: SelectOption | SelectOption[] | undefined) => void;
} & React__default.RefAttributes<HTMLSelectElement>>;

type CascaderOption = {
    label: React__default.ReactNode;
    value: string | number;
    disabled?: boolean;
    children?: CascaderOption[];
};
type CascaderProps = {
    className?: string;
    options: CascaderOption[];
    value?: Array<string | number>;
    onChange?: (value: Array<string | number>, selectedOptions: CascaderOption[]) => void;
    disabled?: boolean;
    size?: "small" | "middle" | "large";
    variant?: "outlined" | "filled" | "borderless" | "underlined";
    invalid?: boolean;
    placeholder?: string;
};
declare function Cascader({ className, options, value, onChange, disabled, size, variant, invalid, placeholder, }: CascaderProps): React__default.JSX.Element;

type TreeSelectOption = {
    title: React__default.ReactNode;
    value: string | number;
    key?: string;
    disabled?: boolean;
    children?: TreeSelectOption[];
};
type TreeSelectProps = {
    className?: string;
    treeData: TreeSelectOption[];
    value?: string | number | Array<string | number>;
    onChange?: (value: string | number | Array<string | number>) => void;
    multiple?: boolean;
    disabled?: boolean;
    size?: "small" | "middle" | "large";
    variant?: "outlined" | "filled" | "borderless" | "underlined";
    invalid?: boolean;
};
declare function TreeSelect({ className, treeData, value, onChange, multiple, disabled, size, variant, invalid, }: TreeSelectProps): React__default.JSX.Element;

type CheckboxGroupOption = {
    label: React__default.ReactNode;
    value: string;
    disabled?: boolean;
};
type CheckboxGroupProps = {
    className?: string;
    options: CheckboxGroupOption[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    disabled?: boolean;
};
declare function CheckboxGroup({ className, options, value, defaultValue, onChange, disabled, }: CheckboxGroupProps): React__default.JSX.Element;

type CheckboxProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange" | "value"> & {
    checked?: boolean;
    value?: boolean;
    onChange?: (checked: boolean) => void;
    onCheckedChange?: (checked: boolean) => void;
};
declare const Checkbox: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "value" | "type"> & {
    checked?: boolean;
    value?: boolean;
    onChange?: (checked: boolean) => void;
    onCheckedChange?: (checked: boolean) => void;
} & React__default.RefAttributes<HTMLInputElement>>;
type CheckboxComponent = typeof Checkbox & {
    Group: typeof CheckboxGroup;
};
declare const CheckboxWithGroup: CheckboxComponent;

type RadioOption = {
    label: React__default.ReactNode;
    value: string;
    disabled?: boolean;
};
type RadioGroupProps = {
    className?: string;
    name?: string;
    options: RadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
};
type RadioButtonProps = Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
};
declare function RadioGroup({ className, name, options, value, defaultValue, onChange, disabled, }: RadioGroupProps): React__default.JSX.Element;
declare function RadioButton({ checked, onChange, className, children, ...props }: RadioButtonProps): React__default.JSX.Element;
declare const Radio: {
    Group: typeof RadioGroup;
    Button: typeof RadioButton;
};

type SwitchProps = Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> & {
    checked?: boolean;
    value?: boolean;
    onChange?: (checked: boolean) => void;
    onCheckedChange?: (checked: boolean) => void;
};
declare const Switch: React__default.ForwardRefExoticComponent<Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> & {
    checked?: boolean;
    value?: boolean;
    onChange?: (checked: boolean) => void;
    onCheckedChange?: (checked: boolean) => void;
} & React__default.RefAttributes<HTMLButtonElement>>;

type RangeValue = [string | undefined, string | undefined];
type RangePickerProps = {
    className?: string;
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
    value?: RangeValue;
    onChange?: (value: RangeValue) => void;
    disabled?: boolean;
};
declare function RangePicker({ className, size, variant, invalid, value, onChange, disabled, }: RangePickerProps): React$1.JSX.Element;

type DatePickerProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
};
declare const DatePicker: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
} & React__default.RefAttributes<HTMLInputElement>>;
type DatePickerComponent = typeof DatePicker & {
    RangePicker: typeof RangePicker;
};
declare const DatePickerWithParts: DatePickerComponent;

type TimePickerProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
};
declare const TimePicker: React__default.ForwardRefExoticComponent<Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: ControlSize;
    variant?: ControlVariant;
    invalid?: boolean;
} & React__default.RefAttributes<HTMLInputElement>>;

type SliderProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange" | "size"> & {
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    size?: "small" | "middle" | "large";
    variant?: "outlined" | "filled" | "borderless" | "underlined";
    invalid?: boolean;
};
declare function Slider({ className, value, defaultValue, onChange, size, variant, invalid, ...props }: SliderProps): React__default.JSX.Element;

type RateProps = {
    className?: string;
    count?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    disabled?: boolean;
};
declare function Rate({ className, count, value, defaultValue, onChange, disabled, }: RateProps): React$1.JSX.Element;

type ColorPickerProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange" | "size"> & {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    size?: "small" | "middle" | "large";
    variant?: "outlined" | "filled" | "borderless" | "underlined";
    invalid?: boolean;
};
declare function ColorPicker({ className, value, defaultValue, onChange, size, variant, invalid, ...props }: ColorPickerProps): React__default.JSX.Element;

type MentionOption = {
    value: string;
    label?: string;
};
type MentionsProps = Omit<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "defaultValue" | "onChange"> & {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    options?: MentionOption[];
    size?: "small" | "middle" | "large";
    variant?: "outlined" | "filled" | "borderless" | "underlined";
    invalid?: boolean;
};
declare function Mentions({ className, value, defaultValue, onChange, rows, size, variant, invalid, ...props }: MentionsProps): React__default.JSX.Element;

type UploadFile = {
    uid: string;
    name: string;
    size: number;
    type: string;
    lastModified: number;
    originFileObj: File;
};
type UploadChangeParam = {
    file: UploadFile;
    fileList: UploadFile[];
    event?: Event;
};
type UploadProps = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> & {
    className?: string;
    fileList?: UploadFile[];
    onChange?: (info: UploadChangeParam) => void;
    multiple?: boolean;
};
declare function Upload({ className, fileList, onChange, multiple, ...props }: UploadProps): React__default.JSX.Element;
type UploadDraggerProps = UploadProps & {
    children?: React__default.ReactNode;
};
declare function UploadDragger({ className, children, ...props }: UploadDraggerProps): React__default.JSX.Element;
type UploadComponent = typeof Upload & {
    Dragger: typeof UploadDragger;
};
declare const UploadWithDragger: UploadComponent;

type TransferItem = {
    key: string;
    title: React__default.ReactNode;
    description?: React__default.ReactNode;
    disabled?: boolean;
};
type TransferProps = {
    className?: string;
    dataSource: TransferItem[];
    targetKeys?: string[];
    onChange?: (targetKeys: string[], direction: "left" | "right", moveKeys: string[]) => void;
    disabled?: boolean;
};
declare function Transfer({ className, dataSource, targetKeys, onChange, disabled, }: TransferProps): React__default.JSX.Element;

export { Cascader, type CascaderOption, type CascaderProps, CheckboxWithGroup as Checkbox, CheckboxGroup, type CheckboxGroupOption, type CheckboxGroupProps, type CheckboxProps, type ColLike, ColorPicker, type ColorPickerProps, DatePickerWithParts as DatePicker, type DatePickerProps, Form, FormErrorList, FormItem, type FormItemProps, type FormLayout, FormList, type FormListProps, type FormProps, FormProvider, type FormProviderProps, type FormSize, type FormVariant, InputWithParts as Input, InputNumber, type InputNumberProps, type InputProps, type LabelAlign, type MentionOption, Mentions, type MentionsProps, PasswordInput, type PasswordInputProps, Radio, RadioButton, type RadioButtonProps, RadioGroup, type RadioGroupProps, type RadioOption, RangePicker, type RangePickerProps, type RangeValue, Rate, type RateProps, type RequiredMark, type ScrollToFirstErrorConfig, Select, type SelectOption, type SelectProps, Slider, type SliderProps, Switch, type SwitchProps, Textarea, type TextareaProps, TimePicker, type TimePickerProps, Transfer, type TransferItem, type TransferProps, TreeSelect, type TreeSelectOption, type TreeSelectProps, UploadWithDragger as Upload, type UploadChangeParam, UploadDragger, type UploadDraggerProps, type UploadFile, type UploadProps, type ValidateConfig, type ValidateStatus };
