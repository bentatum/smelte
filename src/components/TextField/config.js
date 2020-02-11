let config = {
  props: {
    outlined: false,
    value: null,
    label: "",
    placeholder: "",
    hint: "",
    error: false,
    append: "",
    prepend: "",
    persistentHint: false,
    textarea: false,
    rows: 5,
    select: false,
    dense: false,
    autocomplete: false,
    noUnderline: false,
    appendReverse: false,
    prependReverse: false,
    bgColor: "white",
    iconClass: "",
    disabled: false,
    focused: false,
    error: false,
    selectNotAutocomplete: p => p.select && !p.autocomplete,
    labelOnTopOutlined: p => p.labelOnTop && p.outlined
  },
  nodes: {
    root: {
      isMain: true,
      root: `
          duration-200 ease-in pb-2 pt-6 px-4 rounded-t text-black dark:text-gray-100
          w-full caret-$color-$normal dark:bg-dark-600
        `,
      outlined: `
          remove:pt-6.pb-2.dark:bg-dark-600 border border-$color-$normal
          rounded bg-transparent py-4 duration-200 ease-in border-gray-600
        `,
      error:
        "caret-error-$normal remove:caret-$color-$normal border-error-$normal caret-error-$normal",
      prepend: "remove:px-4 pr-4 pl-10",
      disabled:
        "bg-gray-50 dark:bg-dark-400 remove:dark:bg-dark-600 text-gray-600",
      focused: "border-$color-$normal remove:border-gray-600",
      error: "border-error-$normal remove:border-gray-600",
      selectNotAutocomplete: "cursor-pointer"
    },
    wrapper: {
      root: "mt-2 mb-6 relative text-gray-600 dark:text-gray-100",
      select: "select",
      autocomplete: "select",
      dense: "dense",
      error: "remove:text-gray-600 text-error-$normal",
      disabled: "text-gray-200"
    },
    append: {
      root: "absolute right-0 top-0 pb-2 pr-4 pt-4 text-gray-700 z-10"
    },
    prepend: {
      root: "absolute left-0 top-0 pb-2 pl-2 pt-4 text-xs text-gray-700 z-10"
    },
    icon: {
      root: "",
      focused: "text-$color-$normal"
    },
    hint: {
      root: "text-xs py-1 pl-4 absolute bottom-1 left-0",
      error: "text-error-$normal",
      hint: "text-gray-600"
    },
    label: {
      root: `pt-4 absolute top-0 label-transition block pb-2 px-4 pointer-events-none cursor-text`,
      labelOnTop: "label-top text-xs",
      labelOnTopOutlined:
        "remove:pt-4.pb-2.px-4.px-1.pt-0 ml-3 p-1 pt-0 mt-0 bg-$bgColor dark:bg-dark-500",
      prepend: "remove:px-4 pr-4 pl-10",
      focused: "text-$color-$normal",
      error: "text-error-$normal"
    },
    underline: {
      root: "mx-auto w-0",
      focused: "bg-$color-$normal w-full",
      error: "bg-error-$normal w-full"
    },
    underlineWrapper: {
      root: "line absolute bottom-0 left-0 w-full bg-gray-600"
    }
  }
};

export default config;
