const adviceBtn = document.querySelector('.advice-btn');
const adviceId = document.querySelector('.advice-id');
const advicetext = document.querySelector('.advice-text');

const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()
    console.log(data);
    const { slip } = data;
    //adviceId.innerHTML = `#$(slip.id)`
    advicetext.innerHTML = slip.advice;
};

fetchData();
adviceBtn.addEventListener('click', fetchData);


/*document.querySelector('adviceBtn').addEventListener('click', function (event) {
    var index = event.target.id.indexOf('_');

    var id = event.target.id.substring(0, index);

    //actual data
    document.querySelector('#' + id).classList.add('hidden');

    //edit button
    document.querySelector("#" + id + "advice-btn").classList.add('hidden');

    //textarea
    document.querySelector("#" + id + "_editable").classList.remove('hidden');

    //save button
    document.querySelector("#" + id + "_save").classList.remove('hidden');

}); */
