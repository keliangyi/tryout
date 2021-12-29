type A = 'a' | 'b' | 'f'

type B = 'd' | 'f'
type Diff<T, U> = T extends U ? never : T;

type DiffAb = Diff<A, B> // ab

export type ControlTypeHasOption = 5 | 6 | 7 | (number & {})
export type ControlTypeNormal = 1 | 2 | 3 | 4 | (number & {})
export type ControlType = ControlTypeNormal | ControlTypeHasOption

export type Isettings = {
    name: string
    title: string
    defaultValue: any
    [key: string]: any
}

export interface ICate {
    title: string
    id: number,
    icon?: string
    settings: Isettings[]
    [key: string]: any
}

export const HASOPTION: ControlTypeHasOption[] = [5, 6, 7]

export const defaultCates: Array<ICate> = [
    {
        title: '单行文本', id: 1, icon: "icon-text", settings: [
            { name: "placeholder", title: "提示文字", defaultValue: "", },
            { name: "help", title: "帮助", defaultValue: "", },
        ]
    },
    {
        title: '多行文本', id: 2, icon: "icon-font-size", settings: [
            { name: "placeholder", title: "提示文字", defaultValue: "", },
            { name: "help", title: "帮助", defaultValue: "", },
        ]
    },
    {
        title: '数字', id: 3, icon: "icon-number", settings: [
            { name: "placeholder", title: "提示文字", defaultValue: "", },
            { name: "help", title: "帮助", defaultValue: "", },
        ]
    },
    {
        title: '日期时间', id: 4, icon: "icon-calendar", settings: [
            { name: "placeholder", title: "提示文字", defaultValue: "", },
            { name: "help", title: "帮助", defaultValue: "", },
        ]
    },
    {
        title: '单选', id: 5, icon: "icon-check-circle", settings: [
            { name: "help", title: "帮助", defaultValue: "", },
        ]
    },
    {
        title: '多选', id: 6, icon: "icon-check-square", settings: [
            { name: "help", title: "帮助", defaultValue: "", },
        ]
    },
    {
        title: '下拉框', id: 7, icon: "icon-down-square", settings: [
            { name: "help", title: "帮助", defaultValue: "", },
        ]
    },
    {
        title: '分割线', id: 8, icon: "icon-line", settings: [
            { name: "help", title: "帮助", defaultValue: "", },
        ]
    },
]

export class Field {
    key: string;
    label: string;
    required: boolean;
    showLabel: boolean;
    order: number;
    controlType: ControlType;
    placeholder: string
    defaultValue?: string
    help: string
    options: { title: string, value: string | number, checked?: boolean }[];

    settings: ICate['settings']
    attr: any = {}

    constructor(options: {
        controlType: ControlType;
        label: string;
        settings: ICate['settings']

        attr?: any




        required?: boolean;
        showLabel?: boolean;
        order?: number;
        placeholder?: string;
        help?: string;
        options?: { title: string, value: string | number }[];
    }) {
        this.key = Date.now().toString(16)
        this.label = options.label ?? '';
        this.required = !!options.required;
        this.showLabel = options.showLabel ?? true;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType;
        this.help = options.help ?? '';
        this.placeholder = options.placeholder ?? ''
        this.settings = options.settings
        this.attr = options.attr ?? {}
        this.options = this.initOptions(options.controlType)

    }

    private initOptions(controlType: ControlType): Field['options'] {
        if (HASOPTION.includes(controlType)) {
            return [
                { title: "选项一", value: 1 },
                { title: "选项二", value: 2 },
                { title: "选项三", value: 3 },
            ]
        }
        return []
    }
}