require("nvchad.configs.lspconfig").defaults()

local servers = {
  "html",
  "cssls",
  "pylsp",
  "clangd",
  "jdtls",
  "asm-lsp",
  "tsserver",
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

vim.lsp.config("tsserver", {
  cmd = { "typescript-language-server", "--stdio" },
  filetypes = { "javascript" },
  on_attach = on_attach,
  capabilities = capabilities,
})

vim.lsp.enable(servers)
