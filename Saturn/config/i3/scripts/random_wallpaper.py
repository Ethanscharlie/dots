import requests
from bs4 import BeautifulSoup
import os
import random
import subprocess

url = 'https://wallpaperscraft.com/'

def get_images_from_page(page):
    response = requests.get(url)
    if response.status_code == 200:
        content = response.content
    
        soup = BeautifulSoup(content, 'html.parser')
        links = []
        for a in soup.find_all('a', {'class': 'wallpapers__link'}):
            link = a.get('href')
            link = 'https://wallpaperscraft.com' + link
            links.append(link)
            if len(links) > 100: break
    else:
        print(f"Error: could not access {url}")

    return links


def main():
    links = []
    #links.append(get_images_from_page('https://wallpaperscraft.com/catalog/vector'))
    #links.append(get_images_from_page('https://wallpaperscraft.com/catalog/nature'))
    links.append(get_images_from_page('https://wallpaperscraft.com/catalog/abstract'))

    print(links)

    random_cat = random.choice(links)
    random_link = random.choice(random_cat)
    response = requests.get(random_link)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        image = soup.find('img', {'class': 'wallpaper__image'})
        if image:
            image_link = image.get('src')
            if image_link:
                response = requests.get(image_link)
                if response.status_code == 200:
                    filename = os.path.join(os.path.expanduser('~'), 'Downloads', image_link.split('/')[-1])
                    with open(filename, 'wb') as f:
                        f.write(response.content)
                        subprocess.call(['feh', '--bg-fill', filename])
                else:
                    print(f"Error: could not download image from {image_link}")
            else:
                print("Error: could not find image link on wallpaper page")
        else:
            print("Error: could not find image on wallpaper page")
    else:
        print(f"Error: could not access wallpaper page: {random_link}")
        main()


main()

