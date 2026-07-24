from dotenv import load_dotenv
from pathlib import Path
import json
import os

load_dotenv()

WORKDIR = os.getenv("WORKDIR")
dir_path = Path(WORKDIR + "/public/posts")
index_file = dir_path / "index.json"

def create_index_entry(post: Path) -> dict:
    document = json.loads(post.read_text())
    return {
            "slug": document["slug"],
            "title": document["post"]["title"],
            "lastModified": post.stat().st_mtime
        }

index = list(
    map(
        create_index_entry, map(
            lambda d: d / f'{d.name}.json',
            filter(
                lambda x: x.is_dir(), dir_path.iterdir()
            )
)))

index.sort(key=lambda d: d["lastModified"])

index_file.write_text(json.dumps(index,indent=3))