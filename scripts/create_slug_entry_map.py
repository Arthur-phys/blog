from dotenv import load_dotenv
from pathlib import Path
import json
import os

load_dotenv()

WORKDIR = os.getenv("WORKDIR")
dir_path = Path(WORKDIR + "/public/posts")
index_path = dir_path / "index.json"
slug_entry_map_path = dir_path / "slug_entry_map.json"

index = json.loads(index_path.read_text())
slug_entry = {entry["slug"]: entry["title"] for entry in index}

slug_entry_map_path.write_text(json.dumps(slug_entry, indent=3))