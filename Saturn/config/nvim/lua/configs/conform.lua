local options = {
  formatters_by_ft = {
    javascript = { "prettierd", "prettier", stop_after_first = true },
    lua = { "stylua" },
    css = { "prettier" },
    html = { "prettier" },
    python = { "black" },
    java = { "clang-format" },
  },

  format_on_save = {
    --   -- These options will be passed to conform.format()
    timeout_ms = 500,
    lsp_fallback = true,
  },

  formatters = {
    ["clang-format"] = {
      -- Customize clang-format args for Java
      prepend_args = {
        "--assume-filename=.java",
        "--style={BasedOnStyle: Google, IndentWidth: 4, TabWidth: 4, UseTab: Never, BreakBeforeBraces: Attach, AllowShortIfStatementsOnASingleLine: false, ColumnLimit: 120}",
      },
    },
  },
}

return options
