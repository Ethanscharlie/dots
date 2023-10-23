import requests
from bs4 import BeautifulSoup
import os
import random
import subprocess

response = requests.get(input(':'))
if response.status_code == 200:
    filename = os.path.join(os.path.expanduser('~'), 'Downloads', 'somewallpaper')
    with open(filename, 'wb') as f:
        f.write(response.content)
        subprocess.call(['feh', '--bg-fill', filename])
else:
    print(f"Error: could not download image from {image_link}")
