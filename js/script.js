const data = {
    myProfile: {
        details: {
            name: 'Pierfilippo',
            surname: 'Baudo',
            pic: 'https://www.focus.it/site_stored/imgs/0003/042/nerd2.1020x680.jpg',
        },
        posts: [
            {
                text: "C'è nessuno?",
                mediaPath: 'https://acqualete.it/wp-content/uploads/2015/09/La-Particella-di-Sodio-1.jpg',
                date: '26-05-2021'
            }, {
                text: "Vi ricordate di Windows XP? Che ricordi, non ce la faccio...",
                mediaPath: 'https://upload.wikimedia.org/wikipedia/it/d/d3/Colline_%28immagine%29.jpg',
                date: '01-06-2021'
            }, {
                text: "Mi sono iscritto in palestra!",
                date: '16-06-2021'
            }
        ]
    }
};

var userDetailHtml = document.querySelector(".user-details")

userDetailHtml.innerHTML = `
    <div class="user-pic"><img src="${data.myProfile.details.pic}" alt="user pic"></div>
    <div class="user-name">${data.myProfile.details.name} ${data.myProfile.details.surname} </div>
`

// in vuejs sarà: {{ myProfile.details.name }}