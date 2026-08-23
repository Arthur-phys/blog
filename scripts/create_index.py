from dotenv import load_dotenv
from pathlib import Path
import json
import os
import re

load_dotenv()

WORKDIR = os.getenv("WORKDIR")
dir_path = Path(WORKDIR + "/public/posts")
index_file = dir_path / "index.json"
title_stop_words = [
    "a", "an", "and", "as", "at", "but", "by", "for", "if", "in", 
    "nor", "of", "off", "on", "or", "per", "so", "the", "to", "up", 
    "via", "yet", "my", "me"
]

def remove_symbols(s: str) -> str:
    new_s = s.strip()
    match = re.search(".+[^A-Za-z0-9]$", new_s)
    if match is not None:
        new_s = new_s[:-1]
    return new_s

def create_index_entry(post: Path) -> dict:
    document = json.loads(post.read_text())
    keywords = [remove_symbols(w) for w in document["post"]["title"].lower().split(" ") if w not in title_stop_words]
    keywords.extend([k.lower() for k in document["post"]["keywords"]])
    return {
            "slug": document["slug"],
            "title": document["post"]["title"],
            "keywords": list(set(keywords)),
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