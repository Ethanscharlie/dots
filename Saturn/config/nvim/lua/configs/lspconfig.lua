require("nvchad.configs.lspconfig").defaults()

local servers = {
  "html",
  "cssls",
  "pylsp",
  "clangd",
  "jdtls",
  "asm-lsp",
  "ts_ls",
}

vim.lsp.config("pylsp", {
  cmd = { "pylsp" },
  filetypes = { "python" },
  on_attach = on_attach,
  capabilities = capabilities,
})

vim.lsp.config("jdtls", {
  cmd = { "jdtls" },
  filetypes = { "java" },
  on_attach = on_attach,
  capabilities = capabilities,

  settings = {
    java = {
      -- Custom eclipse.jdt.ls options go here
    },
  },
})

vim.lsp.config("clangd", {
  cmd = { "clangd" },
  filetypes = { "cpp", "c" },
  on_attach = on_attach,
  capabilities = capabilities,
})

vim.lsp.config("asm-lsp", {
  cmd = { "asm-lsp" },
  filetypes = { "asm", "s" },
  on_attach = on_attach,
  capabilities = capabilities,
})

vim.lsp.config("ts_ls", {
  cmd = { "typescript-language-server", "--stdio" }, -- Start server with typescript-language-server
  filetypes = { "javascript", "javascriptreact", "typescript", "typescriptreact" },
  on_attach = on_attach,
  capabilities = capabilities,
  javascript = {
    logLevel = 3, -- Enable verbose logging for tsserver
  },
})

vim.lsp.enable(servers)
