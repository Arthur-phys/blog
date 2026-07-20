from dotenv import load_dotenv
from pathlib import Path
import json
import os

load_dotenv()

WORKDIR = os.getenv("WORKDIR")
dir_path = Path(WORKDIR + "/public/posts")
index_file = dir_path / "index.json"
index = {}

def create_index_entry(d: Path) -> dict:
    post = d / f'{d.name}.json'
    document = json.loads(post.read_text())
    return document["slug"], {
            "title": document["post"]["title"],
            "last-modified": post.stat().st_mtime
        }

for d in filter(lambda x: x.is_dir(), dir_path.iterdir()):
    slug, post = create_index_entry(d)
    index[slug] = post

index_file.write_text(json.dumps(index,indent=3))