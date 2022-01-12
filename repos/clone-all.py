import subprocess

NUM_REPOS = 25

repos = []
for i in range(NUM_REPOS):
    repos.append("git@github.com:CT-WS2021-Art/generative-kunst-team-" + str(i) + ".git")

for repo in repos:
    subprocess.run(["git", "clone", repo])

    subprocess.run(["git", "clone", "git@github.com:CT-WS2021-Art/Team-17-richtig-krass.git"])
