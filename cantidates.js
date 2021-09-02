const candidates = [
    {
        name: "Rafael Finger Lenz",
        number: '12',
        party: "lindo",
        image: "https://c.pxhere.com/images/40/18/d25d17724b72028b571129acee6f-1624735.jpg!d"
    }
]


function findCanditate(number){
    return candidates.filter((candidate)=>{
        return candidate.number == number;
    })[0]
}

const imgDefault = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";