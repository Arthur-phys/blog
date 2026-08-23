from dotenv import load_dotenv
from pathlib import Path
import json
import os

load_dotenv()

WORKDIR = os.getenv("WORKDIR")
dir_path = Path(WORKDIR + "/public/posts")
index_path = dir_path / "index.json"
latest_posts_path = dir_path / "latest.json"

latest_posts = json.loads(index_path.read_text())[:10]

latest_posts_path.write_text(json.dumps(latest_posts, indent=3))