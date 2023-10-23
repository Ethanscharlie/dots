import subprocess

links = {
    "ProtonMail": "https://mail.proton.me/u/0/inbox",
    "LeetCode": "https://leetcode.com/",
    "GitHub": "https://github.com/",
    "OpenAI Chat": "https://chat.openai.com/?__cf_chl_f_tk=TdMIba1shGlFlsO_PcqQH_IMGCyjgUOfyHnyajq3N44-1681916376-0-gaNycGzNGKU"
}

titles = '\n'.join(links.keys())
selected_title = subprocess.check_output(['echo', '-e', titles], encoding='utf-8')
selected_title = subprocess.check_output(['dmenu', '-p', 'Links:'], input=selected_title, encoding='utf-8').strip()

if selected_title in links:
    selected_url = links[selected_title]
    subprocess.run(['firefox', '-P', 'Personal', selected_url])

