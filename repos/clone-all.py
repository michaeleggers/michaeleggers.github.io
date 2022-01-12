import subprocess

NUM_REPOS = 25

repos = []
for i in range(NUM_REPOS):
    repos.append("https://github.com/CT-WS2021-Art/generative-kunst-team-" + str(i))

for repo in repos:
    subprocess.run(["git", "submodule", "add", repo])

subprocess.run(["git", "submodule", "add", "https://github.com/CT-WS2021-Art/Team-17-richtig-krass"])
