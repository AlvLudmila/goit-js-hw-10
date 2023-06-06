
// import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
// new SlimSelect({
//   select: '.breed-select',
// })

const refs = {
    // select: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
}

fetchBreeds().then(resp => {
    options = resp.map(({id, name}) => ({
        value: id,
        text: name,
        }
    ));
    
    const select = document.querySelector('.breed-select');

    for(let i = 0; i < options.length; i++) {
        const opt = options[i];
        const el = document.createElement("option");
        el.textContent = opt.text;
        el.value = opt.value;
        select.appendChild(el);
    }
  
    select.classList.remove('is-hidden');
    refs.loader.classList.add('is-hidden');
    console.log(resp)
})
.catch(err => {
    refs.loader.classList.remove('is-hidden');
    Report.failure('Error', `${err.message}`, 'Okey');
}
    )

 
    
    function fetchBreeds() {
        // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
        const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
        const API_KEY = 'live_LtkZH2RZTwm1ZkJ42VIgRyADMPcrXW1Hpm3jHjYvBBjTei7jyoFIFon0SYtuO8Mc';
        
       return fetch(`${BASE_URL}?api_key=${API_KEY}`)
        .then(resp => {
            if(!resp.ok){
            throw new Error ('ERROR')
        }
        return resp.json()
        
    })
    }



    function createMarkup({description, temperament}, {url}){
        
        return ''

    }
