"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Cascader: () => Cascader,
  Checkbox: () => CheckboxWithGroup,
  CheckboxGroup: () => CheckboxGroup,
  ColorPicker: () => ColorPicker,
  DatePicker: () => DatePickerWithParts,
  Form: () => Form,
  FormErrorList: () => FormErrorList,
  FormItem: () => FormItem,
  FormList: () => FormList,
  FormProvider: () => FormProvider,
  Input: () => InputWithParts,
  InputNumber: () => InputNumber,
  Mentions: () => Mentions,
  PasswordInput: () => PasswordInput,
  Radio: () => Radio,
  RadioButton: () => RadioButton,
  RadioGroup: () => RadioGroup,
  RangePicker: () => RangePicker,
  Rate: () => Rate,
  Select: () => Select,
  Slider: () => Slider,
  Switch: () => Switch,
  Textarea: () => Textarea,
  TimePicker: () => TimePicker,
  Transfer: () => Transfer,
  TreeSelect: () => TreeSelect,
  Upload: () => UploadWithDragger,
  UploadDragger: () => UploadDragger
});
module.exports = __toCommonJS(index_exports);

// src/form/Form.tsx
var import_react5 = require("react");
var import_rc_field_form2 = __toESM(require("rc-field-form"), 1);

// src/utils/cn.ts
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/form/FormErrorList.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function FormErrorList({ errors = [], warnings = [], className }) {
  if (errors.length === 0 && warnings.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("space-y-1 text-sm", className), children: [
    errors.map((error, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-destructive", children: error }, `error-${index}`)),
    warnings.map((warning, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-amber-600", children: warning }, `warning-${index}`))
  ] });
}

// src/form/FormItem.tsx
var import_react3 = require("react");
var import_Field = __toESM(require("rc-field-form/lib/Field"), 1);

// src/form/contexts.ts
var import_react = require("react");
var FormInstanceContext = (0, import_react.createContext)(null);
function useFormInstanceContext() {
  const form = (0, import_react.useContext)(FormInstanceContext);
  if (!form) {
    throw new Error("Form.useFormInstance deve ser usado dentro de um <Form />.");
  }
  return form;
}
var FormItemStatusContext = (0, import_react.createContext)({
  status: void 0,
  errors: [],
  warnings: []
});

// src/form/formConfigContext.ts
var import_react2 = require("react");
var FormConfigContext = (0, import_react2.createContext)({
  layout: "vertical",
  requiredMark: true,
  colon: true,
  labelAlign: "end",
  labelWrap: false
});
function useFormConfig() {
  return (0, import_react2.useContext)(FormConfigContext);
}

// src/form/FormItem.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function defaultGetValueFromEvent(valuePropName, args) {
  const event = args[0];
  if (valuePropName === "checked") {
    if (event?.target && "checked" in event.target) {
      return event.target.checked;
    }
    return args[0];
  }
  if (event?.target && "value" in event.target) {
    return event.target.value;
  }
  return args[0];
}
function toStatus(errors, warnings, validating) {
  if (validating) {
    return "validating";
  }
  if (errors.length > 0) {
    return "error";
  }
  if (warnings.length > 0) {
    return "warning";
  }
  return void 0;
}
function namePathToId(name) {
  if (!name) {
    return void 0;
  }
  if (Array.isArray(name)) {
    return name.join("_");
  }
  return String(name);
}
function colToStyle(col) {
  if (!col) {
    return void 0;
  }
  const width = typeof col.span === "number" ? `${col.span / 24 * 100}%` : void 0;
  const marginLeft = typeof col.offset === "number" ? `${col.offset / 24 * 100}%` : void 0;
  if (!width && !marginLeft) {
    return void 0;
  }
  return { width, marginLeft };
}
function FormItem({
  className,
  style,
  name,
  label,
  required,
  hidden,
  noStyle,
  initialValue,
  preserve,
  dependencies,
  rules,
  tooltip,
  htmlFor,
  labelAlign,
  labelCol,
  wrapperCol,
  validateTrigger,
  validateDebounce,
  validateFirst,
  shouldUpdate,
  valuePropName,
  trigger,
  normalize,
  getValueFromEvent,
  getValueProps,
  help,
  extra,
  validateStatus,
  messageVariables,
  children
}) {
  const fieldRules = (0, import_react3.useMemo)(() => rules, [rules]);
  const cfg = useFormConfig();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_Field.default,
    {
      name,
      initialValue,
      preserve,
      dependencies,
      rules: fieldRules,
      validateTrigger,
      validateDebounce,
      validateFirst,
      shouldUpdate,
      messageVariables,
      children: (control, meta, form) => {
        if (typeof children === "function") {
          if (children.length > 0) {
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: children(form) });
          }
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: children() });
        }
        const computedStatus = validateStatus ?? toStatus(meta.errors, meta.warnings, meta.validating);
        const localFieldId = namePathToId(name);
        const fieldId = [cfg.name, localFieldId].filter(Boolean).join("_") || void 0;
        const statusClasses = computedStatus === "error" ? "border-destructive" : computedStatus === "warning" ? "border-amber-500" : "";
        const isRequiredByRule = fieldRules?.some((rule) => {
          if (typeof rule === "function") {
            return false;
          }
          return Boolean(rule.required);
        });
        const requiredMarkEnabled = cfg.requiredMark !== false;
        const showRequiredAsterisk = requiredMarkEnabled && (required === true || !!name && required !== false && isRequiredByRule);
        const showOptionalMark = requiredMarkEnabled && cfg.requiredMark === "optional" && !showRequiredAsterisk && !!name;
        const mergedLabelAlign = labelAlign ?? cfg.labelAlign;
        const labelStyle = colToStyle(labelCol ?? cfg.labelCol ?? void 0);
        const controlStyle = colToStyle(wrapperCol ?? cfg.wrapperCol ?? void 0);
        const isHorizontal = cfg.layout === "horizontal";
        const childDisabled = cfg.disabled === true;
        const childSize = cfg.size;
        const childVariant = cfg.variant;
        const currentPropsFromChild = (0, import_react3.isValidElement)(children) ? children.props : {};
        const resolvedValuePropName = valuePropName ?? ("checked" in currentPropsFromChild && !("value" in currentPropsFromChild) ? "checked" : "value");
        const resolvedTrigger = trigger ?? ("onChange" in currentPropsFromChild ? "onChange" : "onCheckedChange" in currentPropsFromChild ? "onCheckedChange" : "onValueChange" in currentPropsFromChild ? "onValueChange" : "onChange");
        const eventHandler = (...args) => {
          const prevValue = control.value;
          const nextFromEvent = getValueFromEvent ? getValueFromEvent(...args) : defaultGetValueFromEvent(resolvedValuePropName, args);
          const nextValue = normalize ? normalize(nextFromEvent, prevValue, form.getFieldsValue(true)) : nextFromEvent;
          control.onChange(nextValue);
        };
        const childNode = (0, import_react3.isValidElement)(children) && control ? (() => {
          const child = children;
          const currentProps = child.props;
          const isNativeElement = typeof child.type === "string";
          const nextProps = {
            ...getValueProps ? getValueProps(control.value) : { [resolvedValuePropName]: control.value },
            [resolvedTrigger]: (...args) => {
              eventHandler(...args);
              const original = currentProps[resolvedTrigger];
              if (typeof original === "function") {
                original(...args);
              }
            },
            id: currentProps.id ?? fieldId,
            "aria-invalid": computedStatus === "error" ? true : currentProps["aria-invalid"],
            disabled: currentProps.disabled ?? childDisabled ?? void 0
          };
          if (!isNativeElement) {
            nextProps.size = currentProps.size ?? childSize ?? void 0;
            nextProps.variant = currentProps.variant ?? childVariant ?? void 0;
            nextProps.invalid = currentProps.invalid ?? computedStatus === "error";
          }
          return (0, import_react3.cloneElement)(child, nextProps);
        })() : children;
        if (noStyle) {
          return childNode;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          FormItemStatusContext.Provider,
          {
            value: { status: computedStatus, errors: meta.errors, warnings: meta.warnings },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "div",
              {
                className: cn(
                  "space-y-1",
                  isHorizontal && "grid grid-cols-1 items-start gap-2 md:grid-cols-[minmax(120px,auto),1fr]",
                  hidden && "hidden",
                  className
                ),
                style,
                children: [
                  label ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                    "label",
                    {
                      htmlFor: htmlFor === null ? void 0 : htmlFor ?? fieldId,
                      className: cn(
                        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                        mergedLabelAlign === "start" && "text-left",
                        mergedLabelAlign === "end" && "text-right",
                        cfg.labelWrap ? "whitespace-normal break-words" : "whitespace-nowrap"
                      ),
                      style: isHorizontal ? labelStyle : void 0,
                      title: typeof tooltip === "string" ? tooltip : void 0,
                      children: [
                        label,
                        cfg.colon !== false && isHorizontal ? ":" : null,
                        showRequiredAsterisk ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ml-1 text-destructive", children: "*" }) : null,
                        showOptionalMark ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ml-1 text-xs text-muted-foreground", children: "(opcional)" }) : null
                      ]
                    }
                  ) : isHorizontal ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: labelStyle }) : null,
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: isHorizontal ? controlStyle : void 0, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: statusClasses, children: childNode }),
                    help ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "text-sm text-muted-foreground", children: help }) : null,
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormErrorList, { errors: meta.errors, warnings: meta.warnings }),
                    extra ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "text-xs text-muted-foreground", children: extra }) : null
                  ] })
                ]
              }
            )
          }
        );
      }
    }
  );
}

// src/form/FormList.tsx
var import_List = __toESM(require("rc-field-form/lib/List"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
function FormList(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_List.default, { ...props, children: props.children });
}

// src/form/FormProvider.tsx
var import_rc_field_form = require("rc-field-form");
var import_jsx_runtime4 = require("react/jsx-runtime");
function FormProvider(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_rc_field_form.FormProvider, { ...props, children: props.children });
}

// src/form/useItemStatus.ts
var import_react4 = require("react");
function useItemStatus() {
  return (0, import_react4.useContext)(FormItemStatusContext);
}

// src/form/Form.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function namePathToDomId(formName, path) {
  return [formName, ...path].filter(Boolean).join("_");
}
var BaseForm = (0, import_react5.forwardRef)((props, ref) => {
  const {
    className,
    style,
    layout = "vertical",
    form,
    children,
    disabled,
    requiredMark,
    size,
    variant = "outlined",
    colon = true,
    labelAlign = "end",
    labelWrap = false,
    labelCol,
    wrapperCol,
    name,
    scrollToFirstError,
    onFinishFailed,
    ...rest
  } = props;
  const [innerForm] = (0, import_rc_field_form2.useForm)();
  const mergedForm = form ?? innerForm;
  const cfg = {
    layout,
    size,
    disabled,
    requiredMark,
    variant,
    colon,
    labelAlign,
    labelWrap,
    labelCol,
    wrapperCol,
    name
  };
  const handleFinishFailed = (errorInfo) => {
    if (scrollToFirstError && errorInfo.errorFields.length > 0) {
      const firstField = errorInfo.errorFields[0];
      const domId = namePathToDomId(name, firstField.name);
      const fieldNode = document.getElementById(domId);
      if (fieldNode) {
        const options = typeof scrollToFirstError === "object" ? {
          behavior: scrollToFirstError.behavior ?? "smooth",
          block: scrollToFirstError.block ?? "center"
        } : { behavior: "smooth", block: "center" };
        fieldNode.scrollIntoView(options);
        const shouldFocus = typeof scrollToFirstError === "object" ? scrollToFirstError.focus === true : false;
        if (shouldFocus && "focus" in fieldNode && typeof fieldNode.focus === "function") {
          fieldNode.focus();
        }
      }
    }
    onFinishFailed?.(errorInfo);
  };
  const isRenderChildren = typeof children === "function";
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FormConfigContext.Provider, { value: cfg, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FormInstanceContext.Provider, { value: mergedForm, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_rc_field_form2.default,
    {
      ...rest,
      ref,
      form: mergedForm,
      onFinishFailed: handleFinishFailed,
      className: cn(
        layout === "inline" && "flex flex-wrap items-start gap-3",
        layout === "horizontal" && "space-y-4",
        layout === "vertical" && "space-y-4",
        size === "small" && "text-sm",
        size === "large" && "text-base",
        className
      ),
      style,
      "data-form-name": name,
      "data-disabled": disabled ? "true" : "false",
      "data-required-mark": String(requiredMark),
      "data-variant": variant,
      children: isRenderChildren ? children : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children })
    }
  ) }) });
});
BaseForm.displayName = "Form";
var ItemWithStatus = Object.assign(FormItem, {
  useStatus: useItemStatus
});
var Form = Object.assign(BaseForm, {
  Item: ItemWithStatus,
  List: FormList,
  ErrorList: FormErrorList,
  Provider: FormProvider,
  useForm: import_rc_field_form2.useForm,
  useWatch: import_rc_field_form2.useWatch,
  useFormInstance: useFormInstanceContext
});

// src/controls/Input.tsx
var import_react8 = require("react");

// src/controls/styles.ts
function controlClassName(className, size, variant, invalid) {
  return cn(
    "w-full rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
    size === "small" && "h-8 px-2 text-xs",
    (!size || size === "middle") && "h-10 px-3",
    size === "large" && "h-11 px-4 text-base",
    (!variant || variant === "outlined") && "border border-input bg-background",
    variant === "filled" && "border border-transparent bg-muted",
    variant === "borderless" && "border border-transparent bg-transparent",
    variant === "underlined" && "rounded-none border-0 border-b border-input bg-transparent px-0",
    invalid && "border-destructive focus-visible:ring-destructive/30",
    className
  );
}

// src/controls/PasswordInput.tsx
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var PasswordInput = (0, import_react6.forwardRef)(function PasswordInput2({ className, size, variant, invalid, ...props }, ref) {
  const [visible, setVisible] = (0, import_react6.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "input",
      {
        ref,
        type: visible ? "text" : "password",
        className: controlClassName(className, size, variant, invalid),
        ...props
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        type: "button",
        onClick: () => setVisible((current) => !current),
        className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground",
        children: visible ? "ocultar" : "mostrar"
      }
    )
  ] });
});

// src/controls/Textarea.tsx
var import_react7 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Textarea = (0, import_react7.forwardRef)(function Textarea2({ className, size, variant, invalid, rows = 4, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "textarea",
    {
      ref,
      rows,
      className: controlClassName(className, size, variant, invalid),
      ...props
    }
  );
});

// src/controls/Input.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var Input = (0, import_react8.forwardRef)(function Input2({ className, size, variant, invalid, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "input",
    {
      ref,
      className: controlClassName(className, size, variant, invalid),
      ...props
    }
  );
});
var InputWithParts = Object.assign(Input, {
  Password: PasswordInput,
  TextArea: Textarea
});

// src/controls/InputNumber.tsx
var import_react9 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var InputNumber = (0, import_react9.forwardRef)(function InputNumber2({ className, size, variant, invalid, value, defaultValue, onChange, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "input",
    {
      ref,
      type: "number",
      value: value ?? "",
      defaultValue,
      onChange: (event) => {
        const raw = event.target.value;
        onChange?.(raw === "" ? void 0 : Number(raw));
      },
      className: controlClassName(className, size, variant, invalid),
      ...props
    }
  );
});

// src/controls/Select.tsx
var import_react10 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Select = (0, import_react10.forwardRef)(function Select2({ className, size, variant, invalid, options, children, mode, onChange, ...props }, ref) {
  const isMultiple = mode === "multiple" || mode === "tags";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "select",
    {
      ref,
      className: controlClassName(className, size, variant, invalid),
      multiple: isMultiple,
      onChange: (event) => {
        if (isMultiple) {
          const values = Array.from(event.target.selectedOptions).map((opt) => opt.value);
          const selectedOptions = (options ?? []).filter(
            (option) => values.includes(String(option.value))
          );
          onChange?.(values, selectedOptions);
          return;
        }
        const value = event.target.value;
        const selectedOption = (options ?? []).find(
          (option) => String(option.value) === value
        );
        onChange?.(value, selectedOption);
      },
      ...props,
      children: [
        options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: option.value, disabled: option.disabled, children: option.label }, String(option.value))),
        children
      ]
    }
  );
});

// src/controls/Cascader.tsx
var import_react11 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function Cascader({
  className,
  options,
  value = [],
  onChange,
  disabled,
  size,
  variant,
  invalid,
  placeholder = "Selecione"
}) {
  const columns = (0, import_react11.useMemo)(() => {
    const result = [];
    let levelOptions = options;
    let index = 0;
    while (levelOptions && levelOptions.length > 0) {
      result.push(levelOptions);
      const current = value[index];
      const selected = levelOptions.find((option) => option.value === current);
      levelOptions = selected?.children ?? [];
      index += 1;
    }
    return result;
  }, [options, value]);
  const getSelectedOptions = (nextValue) => {
    const selected = [];
    let currentOptions = options;
    for (const part of nextValue) {
      const found = currentOptions.find((option) => option.value === part);
      if (!found) {
        break;
      }
      selected.push(found);
      currentOptions = found.children ?? [];
    }
    return selected;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: cn("flex flex-wrap items-center gap-2", className), children: columns.map((levelOptions, level) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "select",
    {
      disabled,
      className: controlClassName(void 0, size, variant, invalid),
      value: value[level] ?? "",
      onChange: (event) => {
        const nextValue = [...value.slice(0, level), event.target.value];
        const selected = getSelectedOptions(nextValue);
        onChange?.(nextValue, selected);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "", children: placeholder }),
        levelOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: option.value, disabled: option.disabled, children: option.label }, String(option.value)))
      ]
    },
    level
  )) });
}

// src/controls/TreeSelect.tsx
var import_react12 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function flattenTree(options, level = 0) {
  const result = [];
  for (const option of options) {
    result.push({
      value: option.value,
      label: `${" ".repeat(level * 2)}${String(option.title)}`,
      disabled: option.disabled
    });
    if (option.children?.length) {
      result.push(...flattenTree(option.children, level + 1));
    }
  }
  return result;
}
function TreeSelect({
  className,
  treeData,
  value,
  onChange,
  multiple,
  disabled,
  size,
  variant,
  invalid
}) {
  const options = (0, import_react12.useMemo)(() => flattenTree(treeData), [treeData]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "select",
    {
      className: controlClassName(className, size, variant, invalid),
      multiple,
      disabled,
      value,
      onChange: (event) => {
        if (multiple) {
          const selected = Array.from(event.target.selectedOptions).map((opt) => opt.value);
          onChange?.(selected);
          return;
        }
        onChange?.(event.target.value);
      },
      children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: option.value, disabled: option.disabled, children: option.label }, String(option.value)))
    }
  );
}

// src/controls/Checkbox.tsx
var import_react13 = require("react");

// src/controls/CheckboxGroup.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function CheckboxGroup({
  className,
  options,
  value,
  defaultValue = [],
  onChange,
  disabled
}) {
  const selected = value ?? defaultValue;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cn("flex flex-wrap items-center gap-3", className), children: options.map((option) => {
    const checked = selected.includes(option.value);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("label", { className: "inline-flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "input",
        {
          type: "checkbox",
          checked,
          disabled: disabled || option.disabled,
          onChange: (event) => {
            const nextSet = new Set(selected);
            if (event.target.checked) {
              nextSet.add(option.value);
            } else {
              nextSet.delete(option.value);
            }
            onChange?.([...nextSet]);
          }
        }
      ),
      option.label
    ] }, option.value);
  }) });
}

// src/controls/Checkbox.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var Checkbox = (0, import_react13.forwardRef)(function Checkbox2({ checked, value, onChange, onCheckedChange, children, ...props }, ref) {
  const mergedChecked = typeof checked === "boolean" ? checked : Boolean(value);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { className: "inline-flex items-center gap-2 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "input",
      {
        ref,
        type: "checkbox",
        checked: mergedChecked,
        onChange: (event) => {
          const next = event.target.checked;
          onChange?.(next);
          onCheckedChange?.(next);
        },
        ...props
      }
    ),
    children
  ] });
});
var CheckboxWithGroup = Object.assign(Checkbox, {
  Group: CheckboxGroup
});

// src/controls/RadioGroup.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function RadioGroup({
  className,
  name,
  options,
  value,
  defaultValue,
  onChange,
  disabled
}) {
  const selected = value ?? defaultValue;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: cn("flex flex-wrap items-center gap-3", className), children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { className: "inline-flex items-center gap-2 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "input",
      {
        type: "radio",
        name,
        value: option.value,
        checked: selected === option.value,
        disabled: disabled || option.disabled,
        onChange: () => onChange?.(option.value)
      }
    ),
    option.label
  ] }, option.value)) });
}
function RadioButton({ checked, onChange, className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "button",
    {
      type: "button",
      "aria-pressed": checked,
      className: cn(
        "rounded-md border px-3 py-1.5 text-sm transition-colors",
        checked ? "border-primary bg-primary text-primary-foreground" : "border-input bg-background",
        className
      ),
      onClick: () => onChange?.(!checked),
      ...props,
      children
    }
  );
}
var Radio = {
  Group: RadioGroup,
  Button: RadioButton
};

// src/controls/Switch.tsx
var import_react14 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Switch = (0, import_react14.forwardRef)(function Switch2({ checked, value, onChange, onCheckedChange, className, disabled, ...props }, ref) {
  const active = typeof checked === "boolean" ? checked : Boolean(value);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "button",
    {
      ref,
      type: "button",
      role: "switch",
      "aria-checked": active,
      disabled,
      className: cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        active ? "bg-primary" : "bg-muted",
        disabled && "cursor-not-allowed opacity-50",
        className
      ),
      onClick: () => {
        const next = !active;
        onChange?.(next);
        onCheckedChange?.(next);
      },
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "span",
        {
          className: cn(
            "inline-block h-5 w-5 transform rounded-full bg-background transition-transform",
            active ? "translate-x-5" : "translate-x-1"
          )
        }
      )
    }
  );
});

// src/controls/DatePicker.tsx
var import_react15 = require("react");

// src/controls/RangePicker.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function RangePicker({
  className,
  size,
  variant,
  invalid,
  value,
  onChange,
  disabled
}) {
  const [start, end] = value ?? [void 0, void 0];
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: cn("flex items-center gap-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "input",
      {
        type: "date",
        value: start ?? "",
        disabled,
        className: controlClassName(void 0, size, variant, invalid),
        onChange: (event) => onChange?.([event.target.value || void 0, end])
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-muted-foreground", children: "-" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "input",
      {
        type: "date",
        value: end ?? "",
        disabled,
        className: controlClassName(void 0, size, variant, invalid),
        onChange: (event) => onChange?.([start, event.target.value || void 0])
      }
    )
  ] });
}

// src/controls/DatePicker.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var DatePicker = (0, import_react15.forwardRef)(function DatePicker2({ className, size, variant, invalid, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "input",
    {
      ref,
      type: "date",
      className: controlClassName(className, size, variant, invalid),
      ...props
    }
  );
});
var DatePickerWithParts = Object.assign(DatePicker, {
  RangePicker
});

// src/controls/TimePicker.tsx
var import_react16 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var TimePicker = (0, import_react16.forwardRef)(function TimePicker2({ className, size, variant, invalid, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "input",
    {
      ref,
      type: "time",
      className: controlClassName(className, size, variant, invalid),
      ...props
    }
  );
});

// src/controls/Slider.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function Slider({
  className,
  value,
  defaultValue,
  onChange,
  size,
  variant,
  invalid,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "input",
    {
      type: "range",
      className: controlClassName(className, size, variant, invalid),
      value,
      defaultValue,
      onChange: (event) => onChange?.(Number(event.target.value)),
      ...props
    }
  );
}

// src/controls/Rate.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function Rate({
  className,
  count = 5,
  value,
  defaultValue = 0,
  onChange,
  disabled
}) {
  const current = value ?? defaultValue;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: cn("inline-flex items-center gap-1", className), children: Array.from({ length: count }, (_, index) => {
    const star = index + 1;
    const active = star <= current;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "button",
      {
        type: "button",
        disabled,
        className: cn(
          "text-xl leading-none transition-colors",
          active ? "text-amber-500" : "text-muted-foreground",
          disabled && "cursor-not-allowed opacity-50"
        ),
        onClick: () => onChange?.(star),
        children: "\u2605"
      },
      star
    );
  }) });
}

// src/controls/ColorPicker.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function ColorPicker({
  className,
  value,
  defaultValue,
  onChange,
  size,
  variant,
  invalid,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "input",
    {
      type: "color",
      className: controlClassName(className, size, variant, invalid),
      value,
      defaultValue,
      onChange: (event) => onChange?.(event.target.value),
      ...props
    }
  );
}

// src/controls/Mentions.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function Mentions({
  className,
  value,
  defaultValue,
  onChange,
  rows = 4,
  size,
  variant,
  invalid,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "textarea",
    {
      className: controlClassName(className, size, variant, invalid),
      rows,
      value,
      defaultValue,
      onChange: (event) => onChange?.(event.target.value),
      ...props
    }
  );
}

// src/controls/Upload.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
function mapFile(file) {
  return {
    uid: `${file.name}-${file.lastModified}`,
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
    originFileObj: file
  };
}
function Upload({ className, fileList, onChange, multiple, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "input",
    {
      type: "file",
      className: cn("block w-full text-sm", className),
      multiple,
      onChange: (event) => {
        const files = Array.from(event.target.files ?? []);
        if (files.length === 0) {
          return;
        }
        const nextList = files.map(mapFile);
        const merged = fileList ? [...fileList, ...nextList] : nextList;
        onChange?.({
          file: nextList[0],
          fileList: merged,
          event: event.nativeEvent
        });
      },
      ...props
    }
  );
}
function UploadDragger({ className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "label",
    {
      className: cn(
        "flex w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-input p-6 text-sm text-muted-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Upload, { ...props, className: "hidden" }),
        children ?? "Clique ou arraste arquivos para enviar"
      ]
    }
  );
}
var UploadWithDragger = Object.assign(Upload, {
  Dragger: UploadDragger
});

// src/controls/Transfer.tsx
var import_react17 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
function splitItems(dataSource, targetKeys) {
  const targetKeySet = new Set(targetKeys);
  const source = [];
  const target = [];
  for (const item of dataSource) {
    if (targetKeySet.has(item.key)) {
      target.push(item);
    } else {
      source.push(item);
    }
  }
  return { source, target };
}
function Transfer({
  className,
  dataSource,
  targetKeys = [],
  onChange,
  disabled
}) {
  const { source, target } = (0, import_react17.useMemo)(() => splitItems(dataSource, targetKeys), [dataSource, targetKeys]);
  const [selectedSource, setSelectedSource] = (0, import_react17.useState)([]);
  const [selectedTarget, setSelectedTarget] = (0, import_react17.useState)([]);
  const moveToRight = () => {
    const moveKeys = source.filter((item) => selectedSource.includes(item.key) && !item.disabled).map((item) => item.key);
    if (moveKeys.length === 0) {
      return;
    }
    onChange?.([...targetKeys, ...moveKeys], "right", moveKeys);
    setSelectedSource([]);
  };
  const moveToLeft = () => {
    const moveKeySet = new Set(
      target.filter((item) => selectedTarget.includes(item.key) && !item.disabled).map((item) => item.key)
    );
    if (moveKeySet.size === 0) {
      return;
    }
    onChange?.(
      targetKeys.filter((key) => !moveKeySet.has(key)),
      "left",
      Array.from(moveKeySet)
    );
    setSelectedTarget([]);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: cn("flex items-center gap-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "select",
      {
        multiple: true,
        disabled,
        className: "h-40 min-w-52 rounded-md border border-input bg-background p-2 text-sm",
        value: selectedSource,
        onChange: (event) => {
          setSelectedSource(Array.from(event.target.selectedOptions).map((opt) => opt.value));
        },
        children: source.map((item) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: item.key, disabled: item.disabled, children: item.title }, item.key))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "button",
        {
          type: "button",
          disabled: disabled || selectedSource.length === 0,
          className: "rounded-md border border-input px-3 py-1 text-sm disabled:opacity-50",
          onClick: moveToRight,
          children: ">"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "button",
        {
          type: "button",
          disabled: disabled || selectedTarget.length === 0,
          className: "rounded-md border border-input px-3 py-1 text-sm disabled:opacity-50",
          onClick: moveToLeft,
          children: "<"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "select",
      {
        multiple: true,
        disabled,
        className: "h-40 min-w-52 rounded-md border border-input bg-background p-2 text-sm",
        value: selectedTarget,
        onChange: (event) => {
          setSelectedTarget(Array.from(event.target.selectedOptions).map((opt) => opt.value));
        },
        children: target.map((item) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: item.key, disabled: item.disabled, children: item.title }, item.key))
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cascader,
  Checkbox,
  CheckboxGroup,
  ColorPicker,
  DatePicker,
  Form,
  FormErrorList,
  FormItem,
  FormList,
  FormProvider,
  Input,
  InputNumber,
  Mentions,
  PasswordInput,
  Radio,
  RadioButton,
  RadioGroup,
  RangePicker,
  Rate,
  Select,
  Slider,
  Switch,
  Textarea,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  UploadDragger
});
//# sourceMappingURL=index.cjs.map