let a = 5; { let a = 10 }; console.log(a)

const name1 = document.getElementById('name')
const password = document.getElementById('password')
const form = document.querySelector('form')
const error = document.getElementById('error')
const result = document.getElementById('result')
const submitBtn = document.getElementById('btn')
const result2 = document.getElementById('result2')
const result3 = document.getElementById('result3')

const requirements = [
    { regex: /.{8,}/, index: 0 },//minimum 8 characters
    { regex: /[a-z]/, index: 1 },//at least one lower case
    { regex: /[A-z]/, index: 3 },//at least one upper case 
    { regex: /[0-9]/, index: 4 },//at least one number 
    { regex: /[^A-Za-z0-9]/, index: 5 }//at least one special character
]

name1.focus();


password.addEventListener('keyup', (e) => {
    let isValid2 = []
    requirements.forEach((item) => {
        const isValid = item.regex.test(e.target.value)
        console.log(item.regex.test(e.target.value))
        isValid2.push(isValid)
    })
    console.log(isValid2)
})


form.addEventListener('input', () => {
    const isValid = form.checkValidity()
    submitBtn.disabled = !isValid
})

form.addEventListener('password', () => {
    const isValid = form.checkValidity()
    submitBtn.disabled = !isValid
})


form.addEventListener('submit', (e) => {
    const errors = []
    if (name1.value === '' || name1.value === null) {
        errors.push('name is required')
    }
    if (password.value.length <= 6) {
        console.log('helo')
        errors.push('password must be 6 characters')
    }

    if (errors.length > 0) {
        e.preventDefault();
        error.textContent = errors.join(',')
    }


    result.innerText = name1.value + " " + 'and' + " " + password.value
    result2.textContent = name1.value + " " + 'and' + " " + password.value
    result3.innerHTML = `<p>${name1.value}</p>
                        <p>${password.value}</p>
                        `


    e.preventDefault()
})

// const div = document.querySelector('.box')
// div.addEventListener('click', () => {
//     div.style.transform = 'translateX(900px)';
//     div.style.transition = 'transform 1s ease-in-out'
//     // requestAnimationFrame(() => {
//     //     requestAnimationFrame(() => {
//     //         div.style.transform = 'translateX(300px)'
//     //     });

//     // });

//     getComputedStyle(div).transform;
//     div.style.transform = 'translateX(400px)'
// })

const div = document.querySelector('.box');
div.addEventListener('click', () => {
    const startPosition = 1000;
    const targetPosition = 500;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const displacement = 1000;

        div.style.transform = `translateX(${startPosition - displacement}px)`;

        if (progress < 1000) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
});
