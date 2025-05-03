require "nvchad.mappings"

-- add yours here

local map = vim.keymap.set

map("n", ";", ":", { desc = "CMD enter command mode" })
map("i", "jk", "<ESC>")

-- map({ "n", "i", "v" }, "<C-s>", "<cmd> w <cr>")

-- require('runner').run()
map("n", "<leader>r", function()
  require("runner").run()
end, { desc = "Run Run Code" })

map("n", "<leader>ar", function()
  require("runner").autorun()
end, { desc = "Run Autorun Code" })

map("n", "<leader>ng", function()
  require("neogit").open()
end, { desc = "Neogit Open" })
