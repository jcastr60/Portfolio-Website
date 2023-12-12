console.log("hi :)");

const discordApiWidgetUrl = "https://discord.com/api/guilds/885807219571032104/widget.json";
const githubApiRepoUrl = "https://api.github.com/repos/gdscuic/web-dev-crash-course";
const githubApiCommitsUrl = "https://api.github.com/repos/gdscuic/web-dev-crash-course/commits/main";

// grab relevant elements from the DOM for the discord showcase
const discordShowcaseUi = document.getElementById("discord-showcase-ui");
const discordShowcaseLoadingUi = document.getElementById("discord-showcase-loading-ui");

const discordMemberCountElement = discordShowcaseUi.querySelector("#online-users");
const discordVoiceChannelListElement = discordShowcaseUi.querySelector("#voice-channel-list");
const discordMemberListElement = discordShowcaseUi.querySelector("#member-list");

// grab relevant elements from the DOM for the project showcase
const projectShowcaseUi = document.getElementById("project-showcase-ui");
const projectShowcaseLoadingUi = document.getElementById("project-showcase-loading-ui");

const repoStarsElement = projectShowcaseUi.querySelector("#repo-stars");
const repoForksElement = projectShowcaseUi.querySelector("#repo-forks");
const lastCommitElement = projectShowcaseUi.querySelector("#last-commit-message");
const commitAuthors = projectShowcaseUi.querySelector("#commit-authors");

// refresh buttons
const discordRefreshButton = document.getElementById("discord-refresh-button");
const githubRefreshButton = document.getElementById("github-refresh-button");

function getGitHubRepoData() {
  // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
  // TODO grab data from githubApiRepoUrl
  fetch(githubApiRepoUrl)
  .then(response=> response.json())
  .then(data=>{
    console.log(data);
  })
  // https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28
  // TODO grab data from githubApiCommitsUrl
  // wait for both promises to resolve
  // if either promise rejects, set loading ui to error message
  // otherwise, hide loading ui and show project showcase ui
  // TODO use Promise.all([]) to wait for both data requests to resolve
}

function getDiscordInviteData() {
  // https://discord.com/developers/docs/resources/invite#get-invite
  // TODO fetch data from discordApiWidgetUrl
  // TODO update discordMemberCountElement with presence_count
  // TODO figure out how to get voice channel info with people in it
  // TODO add members' profile pictures to discordMemberListElement
}

// TODO add event listeners to refresh buttons

// TODO call both functions once on page load
getGitHubRepoData();
//getDiscordInviteData();
