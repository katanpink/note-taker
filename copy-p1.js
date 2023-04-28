var i = 0
const form = document.getElementById("mailForm");
const subList = document.querySelector(".subs");

const input = mailForm["mail"]
const inp = mailForm['tit']

const Email = JSON.parse(localStorage.getItem("subs")) || [];

const addSub = (mail, tit) => {
    i++
    Email.push({
        mail,
        tit
    });
    localStorage.setItem("subs", JSON.stringify(Email));
    return { mail, tit };
}

const createSubElement = ({ mail, tit }) => {
    // Create elements
    const subDiv = document.createElement("div");
    const titl = document.createElement("H1");
    const mailE = document.createElement("p");
    const kill = document.createElement('button');
    // Fill the content
    titl.innerText = tit;
    mailE.innerText = mail;
    titl.style.maxWidth = "200px"
    mailE.style.maxWidth = "200px"
    kill.setAttribute('id', 'kal')
    kill.setAttribute('onclick', 'myFunction(this)')
    kill.style.width = "10%"
    kill.style.height = "10px"
    kill.style.backgroundColor = "red"
    subDiv.setAttribute('id', 'kel' + i)
    // Add to the DOM
    subDiv.append(titl);
    subDiv.append(mailE);
    subDiv.append(kill)
    subList.appendChild(subDiv);
    subList.style.display = Email.length === 0 ? "none" : "grid";
};
subList.style.display = Email.length === 0 ? "none" : "grid";

Email.forEach(createSubElement);
form.onsubmit = e => {
    e.preventDefault();
    const newSub = addSub(
        input.value,
        inp.value,
    );
    createSubElement(newSub);
    input.value = "";
    inp.value = "";
};
function myFunction(a) {
    a.parentNode.remove();
    var re = a.parentNode.firstChild.innerHTML
    var le = a.parentNode.firstChild.nextSibling.innerHTML
    // var mail
    var subslocal = JSON.parse(localStorage.getItem("subs"))
    for(var o = 0; subslocal.length > o; o++){
        console.log('scanning')
        console.log(subslocal[o])
        if(subslocal[o].mail == le && subslocal[o].tit == re){
            console.log("grabbed")
            subslocal[o].mail = ''
            subslocal[o].tit = ''
            subslocal.splice(o)
            localStorage.stringify(setItem("subs", subslocal))
            break
        }
    }
    alert("jong");
    console.log(subslocal)

}
