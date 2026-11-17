import { useMemo, useState } from "react";
import {
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Radio,
  RangePicker,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  type TransferItem,
} from "shadcn-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type LayoutMode = "horizontal" | "vertical" | "inline";
type VariantMode = "outlined" | "filled" | "borderless" | "underlined";

const menuItems = [
  { id: "form", label: "Form" },
  { id: "import", label: "Import" },
  { id: "when-to-use", label: "When to use" },
  { id: "examples", label: "Examples" },
  { id: "api", label: "API" },
  { id: "faq", label: "FAQ" },
];

const transferData: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: String(i + 1),
  title: `Content ${i + 1}`,
}));

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-xs">
      <code>{code}</code>
    </pre>
  );
}

function App() {
  const [layout, setLayout] = useState<LayoutMode>("horizontal");
  const [variant, setVariant] = useState<VariantMode>("outlined");
  const [targetKeys, setTargetKeys] = useState<string[]>(["2", "4", "6"]);
  const [result, setResult] = useState<string>("");
  const [methodForm] = Form.useForm<{
    username: string;
    profile: { email: string };
  }>();

  const treeData = useMemo(
    () => [
      {
        title: "Parent 1",
        value: "p1",
        children: [
          { title: "Child 1-1", value: "p1-c1" },
          { title: "Child 1-2", value: "p1-c2" },
        ],
      },
      {
        title: "Parent 2",
        value: "p2",
        children: [{ title: "Child 2-1", value: "p2-c1" }],
      },
    ],
    [],
  );

  const cascaderOptions = useMemo(
    () => [
      {
        label: "Zhejiang",
        value: "zhejiang",
        children: [
          {
            label: "Hangzhou",
            value: "hangzhou",
            children: [{ label: "West Lake", value: "west_lake" }],
          },
        ],
      },
      {
        label: "Jiangsu",
        value: "jiangsu",
        children: [{ label: "Nanjing", value: "nanjing" }],
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold">shadcn-form</h1>
            <p className="text-xs text-muted-foreground">
              High-performance form component with data domain management.
            </p>
          </div>
          <a
            className="text-sm text-primary underline-offset-4 hover:underline"
            href="https://github.com/jafbnt/shadcn-form"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[240px_1fr]">
        <aside className="top-24 h-fit lg:sticky">
          <div className="rounded-lg border border-border p-4">
            <p className="mb-3 text-sm font-semibold">Menu</p>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="space-y-12 pb-16">
          <Section
            id="form"
            title="Form"
            description="High-performance form component with data domain management. Includes data entry, validation, and corresponding styles."
          >
            <Card>
              <CardContent className="pt-6">
                <p className="mb-3 text-sm font-medium">Run local</p>
                <CodeBlock
                  code={`cd docs\nnpm install\nnpm run dev\n\n# build library + docs\ncd ../library && npm run build\ncd ../docs && npm run build`}
                />
              </CardContent>
            </Card>
          </Section>

          <Section id="import" title="Import">
            <CodeBlock code={`import { Form } from "shadcn-form";`} />
          </Section>

          <Section
            id="when-to-use"
            title="When to use"
            description="When you need to create an instance or collect information; when you need to validate fields with specific rules."
          >
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Create forms with controlled data flow.</li>
              <li>Use field validation with rules and custom messages.</li>
              <li>Build dynamic fields with <code>Form.List</code>.</li>
              <li>Coordinate forms with <code>Form.Provider</code>.</li>
            </ul>
          </Section>

          <Section id="examples" title="Examples">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Usage</CardTitle>
                  <CardDescription>
                    Basic form data control with initial values, validation and submit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={(values) => setResult(JSON.stringify(values, null, 2))}
                  >
                    <Form.Item
                      name="username"
                      label="Username"
                      rules={[{ required: true, message: "Please input your username" }]}
                    >
                      <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[{ required: true, message: "Please input your password" }]}
                    >
                      <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Button type="submit">Submit</Button>
                  </Form>
                  {result ? (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Submit Result</p>
                      <CodeBlock code={result} />
                    </div>
                  ) : null}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form Methods</CardTitle>
                  <CardDescription>Call form methods with Form.useForm and Form.useWatch.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Form
                    form={methodForm}
                    layout="vertical"
                    initialValues={{ username: "Ant Design", profile: { email: "antd@example.com" } }}
                    onFinish={(values) => setResult(JSON.stringify(values, null, 2))}
                  >
                    <Form.Item name="username" label="Username">
                      <Input />
                    </Form.Item>
                    <Form.Item name={["profile", "email"]} label="Email">
                      <Input />
                    </Form.Item>
                    <div className="flex flex-wrap gap-2">
                      <Button type="submit">Submit</Button>
                      <Button
                        variant="outline"
                        onClick={() => methodForm.setFieldsValue({ username: "Updated Name" })}
                      >
                        setFieldsValue
                      </Button>
                      <Button variant="secondary" onClick={() => methodForm.resetFields()}>
                        resetFields
                      </Button>
                    </div>
                  </Form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form Layout</CardTitle>
                  <CardDescription>Horizontal, vertical and inline layouts.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {(["horizontal", "vertical", "inline"] as LayoutMode[]).map((item) => (
                      <Button
                        key={item}
                        variant={layout === item ? "default" : "outline"}
                        onClick={() => setLayout(item)}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                  <Form
                    layout={layout}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={{ fieldA: "A", fieldB: "B" }}
                  >
                    <Form.Item name="fieldA" label="Field A">
                      <Input />
                    </Form.Item>
                    <Form.Item name="fieldB" label="Field B">
                      <Input />
                    </Form.Item>
                  </Form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form disabled</CardTitle>
                  <CardDescription>
                    Set component to disabled. Showcase for form controls available in this library.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form
                    disabled
                    layout="vertical"
                    initialValues={{
                      input: "Input text",
                      select: "apple",
                      tree: "p1-c1",
                      date: "2026-11-17",
                      range: ["2026-11-17", "2026-11-25"],
                      number: 3,
                      switch: true,
                      slider: 30,
                      color: "#1677ff",
                      mention: "@afc163",
                    }}
                  >
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                      <Form.Item name="input" label="Input">
                        <Input />
                      </Form.Item>
                      <Form.Item name="select" label="Select">
                        <Select
                          options={[
                            { value: "apple", label: "Apple" },
                            { value: "pear", label: "Pear" },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item name="tree" label="TreeSelect">
                        <TreeSelect treeData={treeData} />
                      </Form.Item>
                      <Form.Item name="cascader" label="Cascader">
                        <Cascader options={cascaderOptions} />
                      </Form.Item>
                      <Form.Item name="date" label="DatePicker">
                        <DatePicker />
                      </Form.Item>
                      <Form.Item name="range" label="RangePicker">
                        <RangePicker />
                      </Form.Item>
                      <Form.Item name="number" label="InputNumber">
                        <InputNumber />
                      </Form.Item>
                      <Form.Item name="time" label="TimePicker">
                        <TimePicker />
                      </Form.Item>
                      <Form.Item name="switch" label="Switch" valuePropName="checked">
                        <Switch />
                      </Form.Item>
                      <Form.Item name="slider" label="Slider">
                        <Slider min={0} max={100} />
                      </Form.Item>
                      <Form.Item name="color" label="ColorPicker">
                        <ColorPicker />
                      </Form.Item>
                      <Form.Item name="rate" label="Rate">
                        <Rate />
                      </Form.Item>
                      <Form.Item name="mention" label="Mentions">
                        <Mentions />
                      </Form.Item>
                      <Form.Item name="upload" label="Upload" valuePropName="fileList">
                        <Upload />
                      </Form.Item>
                      <Form.Item name="radio" label="Radio.Group">
                        <Radio.Group
                          options={[
                            { label: "item 1", value: "1" },
                            { label: "item 2", value: "2" },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item name="checkboxGroup" label="Checkbox.Group">
                        <Checkbox.Group
                          options={[
                            { label: "A", value: "a" },
                            { label: "B", value: "b" },
                            { label: "C", value: "c" },
                          ]}
                        />
                      </Form.Item>
                    </div>
                  </Form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form variant</CardTitle>
                  <CardDescription>
                    outlined, filled, borderless and underlined variants for controls.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {(["outlined", "filled", "borderless", "underlined"] as VariantMode[]).map(
                      (item) => (
                        <Button
                          key={item}
                          variant={variant === item ? "default" : "outline"}
                          onClick={() => setVariant(item)}
                        >
                          {item}
                        </Button>
                      ),
                    )}
                  </div>
                  <Form layout="vertical" variant={variant}>
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                      <Form.Item name="v_input" label="Input">
                        <Input placeholder="Input" />
                      </Form.Item>
                      <Form.Item name="v_number" label="InputNumber">
                        <InputNumber placeholder="1" />
                      </Form.Item>
                      <Form.Item name="v_textarea" label="TextArea">
                        <Input.TextArea placeholder="Textarea" />
                      </Form.Item>
                      <Form.Item name="v_mention" label="Mentions">
                        <Mentions placeholder="@afc163" />
                      </Form.Item>
                      <Form.Item name="v_select" label="Select">
                        <Select options={[{ label: "Option", value: "option" }]} />
                      </Form.Item>
                      <Form.Item name="v_date" label="DatePicker">
                        <DatePicker />
                      </Form.Item>
                    </div>
                  </Form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form.List</CardTitle>
                  <CardDescription>
                    Dynamic array fields with add, remove and move operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form initialValues={{ users: [{ name: "" }] }} layout="vertical" onFinish={console.log}>
                    <Form.List name="users">
                      {(fields, { add, remove, move }) => (
                        <div className="space-y-3">
                          {fields.map((field, index) => (
                            <div key={field.key} className="rounded-md border border-border p-3">
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto]">
                                <Form.Item
                                  name={[field.name, "name"]}
                                  label={`User ${index + 1}`}
                                  rules={[{ required: true, message: "Required" }]}
                                >
                                  <Input placeholder="Name" />
                                </Form.Item>
                                <div className="flex items-end gap-2 pb-1">
                                  <Button variant="outline" onClick={() => remove(field.name)}>
                                    Remove
                                  </Button>
                                  {index > 0 ? (
                                    <Button variant="secondary" onClick={() => move(index, index - 1)}>
                                      Up
                                    </Button>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="flex gap-2">
                            <Button variant="outline" onClick={() => add({ name: "" })}>
                              Add Item
                            </Button>
                            <Button type="submit">Submit List</Button>
                          </div>
                        </div>
                      )}
                    </Form.List>
                  </Form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transfer</CardTitle>
                  <CardDescription>Transfer items between source and target lists.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Transfer
                    dataSource={transferData}
                    targetKeys={targetKeys}
                    onChange={(next) => setTargetKeys(next)}
                  />
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="api" title="API">
            <div className="space-y-6">
              <ApiCard
                title="Form"
                rows={[
                  ["layout", `"horizontal" | "vertical" | "inline"`, `"vertical"`],
                  ["disabled", "boolean", "false"],
                  ["requiredMark", `boolean | "optional"`, "true"],
                  ["size", `"small" | "middle" | "large"`, "-"],
                  ["variant", `"outlined" | "filled" | "borderless" | "underlined"`, `"outlined"`],
                  ["labelAlign", `"start" | "end"`, `"end"`],
                  ["scrollToFirstError", "boolean | { focus?: boolean }", "false"],
                  ["onFinish", "(values) => void", "-"],
                  ["onFinishFailed", "(errorInfo) => void", "-"],
                  ["onValuesChange", "(changedValues, allValues) => void", "-"],
                ]}
              />

              <ApiCard
                title="Form.Item"
                rows={[
                  ["name", "NamePath", "-"],
                  ["label", "ReactNode", "-"],
                  ["rules", "Rule[]", "-"],
                  ["dependencies", "NamePath[]", "-"],
                  ["valuePropName", "string", `"value"`],
                  ["trigger", "string", `"onChange"`],
                  ["getValueFromEvent", "(...args) => any", "-"],
                  ["normalize", "(value, prevValue, allValues) => any", "-"],
                  ["help", "ReactNode", "-"],
                  ["extra", "ReactNode", "-"],
                  ["validateStatus", `"success" | "warning" | "error" | "validating"`, "auto"],
                  ["noStyle", "boolean", "false"],
                ]}
              />

              <ApiCard
                title="Form.List operation"
                rows={[
                  ["add", "(defaultValue?: any, insertIndex?: number) => void", "-"],
                  ["remove", "(index: number | number[]) => void", "-"],
                  ["move", "(from: number, to: number) => void", "-"],
                ]}
              />
            </div>
          </Section>

          <Section id="faq" title="FAQ">
            <Card>
              <CardContent className="space-y-4 pt-6 text-sm">
                <FaqItem
                  q="Why Switch and Checkbox need valuePropName='checked'?"
                  a="Form.Item binds to value by default, but Switch and Checkbox use checked as controlled prop."
                />
                <FaqItem
                  q="Can I use custom components inside Form.Item?"
                  a="Yes. They must expose controlled prop (value/checked), emit a trigger event (usually onChange), and forward id/ref for scroll-to-field behavior."
                />
                <FaqItem
                  q="Should I use defaultValue inside Form.Item?"
                  a="Prefer Form initialValues for defaults. Controls with name become controlled by Form."
                />
              </CardContent>
            </Card>
          </Section>
        </main>
      </div>
    </div>
  );
}

function ApiCard({ title, rows }: { title: string; rows: [string, string, string][] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="border-b border-border px-3 py-2 font-medium">Property</th>
                <th className="border-b border-border px-3 py-2 font-medium">Type</th>
                <th className="border-b border-border px-3 py-2 font-medium">Default</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([name, type, defaultValue]) => (
                <tr key={name} className={cn("hover:bg-muted/30", "odd:bg-background even:bg-muted/20")}>
                  <td className="border-b border-border px-3 py-2 font-mono text-xs">{name}</td>
                  <td className="border-b border-border px-3 py-2">{type}</td>
                  <td className="border-b border-border px-3 py-2">{defaultValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-md border border-border p-3">
      <p className="font-medium">{q}</p>
      <p className="mt-1 text-muted-foreground">{a}</p>
    </div>
  );
}

export default App;
