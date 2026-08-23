from dotenv import load_dotenv
from pathlib import Path
import json
import os

load_dotenv()

WORKDIR = os.getenv("WORKDIR")
dir_path = Path(WORKDIR + "/public/posts")
index_file = dir_path / "index.json"
reverse_index_file = dir_path / "reverse_index.json"

def create_reverse_index() -> dict:
    index = json.loads(index_file.read_text())
    reverse_index = {}
    for entry in index:
        for word in entry["keywords"]:
            if word not in reverse_index:
                reverse_index[word] = [entry["slug"]]
                continue
            reverse_index[word].append(entry["slug"])

    for key, val in reverse_index.items():
        val.sort()
        reverse_index[key] = val

    return reverse_index

reverse_index_file.write_text(json.dumps(create_reverse_index(), indent=3))

