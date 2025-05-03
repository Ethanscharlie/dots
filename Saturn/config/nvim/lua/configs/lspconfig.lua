require("nvchad.configs.lspconfig").defaults()

local servers = { 
  "html", "cssls", 
  "pylsp", 
  "clangd", 
  "jdtls",
}

vim.lsp.config('pylsp', {
  cmd = { 'pylsp' },
  filetypes = { 'python' },
  on_attach = on_attach,
  capabilities = capabilities,
})

vim.lsp.config('jdtls', {
  cmd = { 'jdtls' },
  filetypes = { 'java' },
  on_attach = on_attach,
  capabilities = capabilities,
})

vim.lsp.config('clangd', {
  cmd = { 'clangd' },
  filetypes = { 'cpp', 'c' },
  on_attach = on_attach,
  capabilities = capabilities,
})

vim.lsp.enable(servers)
