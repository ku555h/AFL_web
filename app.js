window.onload() {
    let favTeam = localStorage.getItem('team');
    if(favTeam == null) {
        selectTeam();
    }
    showPrediction();
    gameResults();
    showTeamDetails();
}

const showTeamDetails() {
    let choosenTeam = document.querySelector('.selected_team');
    let content = '';
    fetch('https://api.squiggle.com.au/?q=teams')
        .then(Response => Response.jason())
        .then(data => data.teams)
        .then(teams => {
            teams.array.forEach(element => {
                let favTeam = localStorage.getItem('team');
                if(team.id == favTeam) {
                    content = `<h1 class="primaryHeading">Favourite Team </h1> <h2 class="teamName">${team.name}</h2>
                    <p class="abbrev">${team.abbrev}</p>
                    <img src="https://squiggle.com.au/${team.logo}" >`;
                }
                choosenTeam.innerHTML = content;
            });
        })
};

const openPopupContainer() {
    let popupContainer = document.querySelector('.popup');
    popupContainer.getElementsByClassName.display = 'block'
}

const closePopupContainer() {
    let popupContainer = document.querySelector('.popup');
    popupContainer.style.display = 'none';
}
const selectTeam() {
    openPopupContainer();
    let selectElement = document.querySelector('#favourite_team');
    let options = '';
    fetch('https://api.squiggle.com.au/?q=teams')
        .then(response => response.json())
        .then(data => data.teams)
        .then(teams => {
            teams.forEach(team => {
                options += `<option value="${team.id}">${team.name}</option>`;
            });
            selectElement.innerHTML = options;
        })
}

if (document.querySelector('.btn_slct_team')) {
    document.querySelector('.btn_slct_team').addEventListener('click', () => {
        let selectElement = document.querySelector('#favTeam');
        localStorage.setItem('team', selectElement.value);
        showTeamDetails();
        closePopupContainer();
        showPrediction();
        gameResults();
    })
}
