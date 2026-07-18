from dotenv import load_dotenv
from pathlib import Path
import json
import os

load_dotenv()

post_folder = os.getenv("WORKDIR") + "/public/posts"

dir_path = Path(post_folder)
post_dirs = [Path()]
post_dirs.extend(sorted(filter(lambda x: x.is_dir(), dir_path.iterdir()), key=lambda x: x.stat().st_mtime))
post_dirs.append(Path())
linked_list = {}

for i in range(1, len(post_dirs) - 1):
    linked_list[post_dirs[i].name] = {"previous": post_dirs[i-1].name, "next": post_dirs[i+1].name}

for key,value in linked_list.items():
    linked_list_file =  post_folder + f'/{key}' + "/linked.json"
    with open(linked_list_file, "w", encoding="utf-8") as file:
        file.write(json.dumps(linked_list[key], indent=3))