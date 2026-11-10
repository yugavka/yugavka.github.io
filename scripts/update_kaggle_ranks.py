#!/usr/bin/env python3
"""Refresh the site's Kaggle competition places using the official Kaggle CLI.

The CLI authenticates with KAGGLE_API_TOKEN in CI or the user's local Kaggle
configuration. Credentials never appear in the generated JSON.
"""

import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse


SLUGS = (
    "enveda-CASMI26-molecule-id-mass-spectra",
    "name-that-llm",
    "squares-in-squares",
    "biohub-cell-tracking-during-development",
)
OUTPUT = Path(__file__).resolve().parents[1] / "src" / "data" / "kaggleRanks.json"


def main() -> None:
    result = subprocess.run(
        ["kaggle", "competitions", "list", "--group", "entered", "--format", "json", "--page-size", "100"],
        check=True,
        capture_output=True,
        text=True,
    )
    entries = json.loads(result.stdout)
    if not isinstance(entries, list):
        raise ValueError("Kaggle returned an unexpected competition list")

    by_slug = {}
    for entry in entries:
        ref = entry.get("ref", "")
        parsed = urlparse(ref)
        if parsed.hostname != "www.kaggle.com" or not parsed.path.startswith("/competitions/"):
            continue
        slug = parsed.path.rstrip("/").split("/")[-1]
        if slug in SLUGS:
            rank = int(entry["userRank"])
            team_count = int(entry["teamCount"])
            if rank < 0 or team_count < 0 or (rank > 0 and rank > team_count):
                raise ValueError(f"Invalid leaderboard place for {slug}")
            by_slug[slug] = {"rank": rank or None, "teamCount": team_count}

    missing = set(SLUGS) - by_slug.keys()
    if missing:
        raise ValueError(f"Kaggle did not return expected competitions: {', '.join(sorted(missing))}")

    snapshot = {
        "updatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
        "ranks": {slug: by_slug[slug] for slug in SLUGS},
    }
    OUTPUT.write_text(json.dumps(snapshot, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print("Updated Kaggle ranks for 4 competitions")


if __name__ == "__main__":
    main()
