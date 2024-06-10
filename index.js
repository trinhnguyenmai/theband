//member
const MemberItems = [
    {
        nameMember: "John",
        imgMember: "./assets/css/image/john.jpg"
    },
    {
        nameMember: "Alex",
        imgMember: "./assets/css/image/alex.jpg"
    },
    {
        nameMember: "Anna",
        imgMember: "./assets/css/image/anna.jpg"
    }
]

const MemberList = document.getElementsByClassName("member-container")[0]

MemberList.innerHTML= MemberItems.map((items,index) => {
    return`
    <div class="member">
        <div>${items.nameMember}</div>
        <div>
            <img class="member-img" src="${items.imgMember}" alt="member">
        </div>
    </div>
    `
})

//places

const PlaceItems = [
    {
        namePlace: "New York",
        date: "Fri 27 Nov 2016",
        imgPlace: "./assets/css/image/newyork.jpg"
    },
    {
        namePlace: "Paris",
        date: "Sat 28 Nov 2016",
        imgPlace: "./assets/css/image/paris.jpg"
    },
    {
        namePlace: "San Francisco",
        date: "Sun 29 Nov 2016",
        imgPlace: "./assets/css/image/sanfran.jpg"
    }
]

const PlaceList = document.getElementsByClassName("places-container")[0]

PlaceList.innerHTML=PlaceItems.map((items,index) => {
    return`
    <div class="place-items">
        <img class="img-place" src="${items.imgPlace}" alt="">
        <div class="place-inf">
            <div class="place-name">${items.namePlace}</div>
            <div class="place-date">${items.date}</div>
            <div>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</div>
            <div class="btn-buy">Buy Tickets</div>
        </div>
    </div>
    `
}).join('')