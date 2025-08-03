local shell_handler = require("runner.handlers.helpers").shell_handler

require("runner").set_handler("asm", function(bufnr)
  local file_path = vim.fn.expand "%"
  local file_base = vim.fn.expand "%:r" -- Base name (without extension)

  local cmd = "nasm -f elf64 "
    .. file_path
    .. " -o "
    .. file_base
    .. ".o && ld -m elf_x86_64 -s -o"
    .. file_base
    .. " "
    .. file_base
    .. ".o"
    .. ""
  shell_handler(cmd)(bufnr)
end)
