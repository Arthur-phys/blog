from dotenv import load_dotenv
from pathlib import Path
import json
import os

load_dotenv()

WORKDIR = os.getenv("WORKDIR")
dir_path = Path(WORKDIR + "/public/posts")
index_file_location = dir_path / "index.json"
empty_post = {
    "slug": "",
    "title": ""
}

index_file = [empty_post]
index_file.extend(json.loads(index_file_location.read_text()))
index_file.append(empty_post)


for i in range(1, len(index_file) - 1):
    post_slug: str = index_file[i]["slug"] 
    post_file = dir_path / post_slug / f'{post_slug}.json' 
    post = json.loads(post_file.read_text())
    post["previous"] = {
        "slug": index_file[i-1]["slug"],
        "title": index_file[i-1]["title"]
    }
    post["next"] = {
        "slug": index_file[i+1]["slug"],
        "title": index_file[i+1]["title"]
    }
    post_file.write_text(json.dumps(post, indent=3))