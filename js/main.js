import {
    searchBt,
    homeBt,
    settingsBt,
    settingsBar,
    toggle,
    searchBar,
    classSelector,
    typeSelector,
    header,
    nav,
    up,
    main,
    focusDiv,
    year,
    date
} from '../data/var.js';

export default function App(data){

        year.innerText = date.getFullYear();
        toggle.style.display = 'none';

        searchBt.onclick = () => {
            searchBar.style.transform = 'translateX(calc((100vw - 90vw)/2)'
            homeBt.style.opacity = '0';
            settingsBt.style.opacity = '0';
            searchBt.style.opacity = '0';
            toggle.style.display = 'block'
        }

        toggle.onclick = () => {
            searchBt.style.marginLeft = '0';
            searchBar.style.transform = 'translateX(-100vw)';
            settingsBar.style.transform = 'translateX(100vw)';
            homeBt.style.opacity = '1';
            settingsBt.style.opacity = '1';
            searchBt.style.opacity = '1';
            toggle.style.display = 'none';
        }

        settingsBt.onclick = () => {
            settingsBar.style.transform = 'translateX(0)';
            focusDiv.style.display = 'none';
        }

        settingsBar.onclick = () => {
            focusDiv.style.display = '';
            settingsBar.style.transform = 'translateX(100vw)';
        }

        homeBt.onclick = () => {
            window.open('./index.html', '_parent')
        }

        function renderAll(){
            for(let i = 0; i < data.length; i++){
                main.innerHTML += `
                    <div class='newDiv'>
                        <h3>${data[i].title}</h3>
                        <p>${data[i].main}</p>
                    </div>
                `
            }
        }

        renderAll();

        classSelector.addEventListener('change', () => {
            check(classSelector.value, typeSelector.value);
        })

        typeSelector.addEventListener('change', () => {
            check(classSelector.value, typeSelector.value);
        })

        const newDiv = document.querySelectorAll('.newDiv');

        function check(grade, type){
            hideAll();
            for(let i = 0; i < data.length; i++){

                if(data[i].grade == parseFloat(grade)){

                    checkType();

                }
                else{
                    if(grade == 'ყველა კლასი'){

                        checkType()

                    }
                }

                function checkType(){
                    if(data[i].type == type){
                        newDiv[i].style.display = '';
                    }
                    else{
                        if(type == 'ყველა'){
                            newDiv[i].style.display = '';
                        }
                    }
                }
            }
        }

        function hideAll(){
            for(let i = 0; i < data.length; i++){
                newDiv[i].style.display = 'none';
            }
        }

        document.addEventListener('scroll', (event) => {
            if(scrollY > window.innerHeight/4){
                up.style.transform = 'translateX(0)';
                if(window.innerWidth < 554){
                    nav.style.transform = 'translateY(13vh)'
                }
                header.style.transform = 'translateY(-13vh)'
            }
            else{
                up.style.transform = 'translateX(100vw)';
                if(window.innerWidth < 554){
                    nav.style.transform = 'translateY(0)'
                }
                header.style.transform = 'translateY(0)'
            }
        })

        up.onclick = () => {
            scroll(0, 0)
        }

        searchBar.addEventListener('input', () => {
            const grade = classSelector.value;
            const type = typeSelector.value;

            hideAll();
            for(let i = 0; i < data.length; i++){
                if(data[i].title.includes(searchBar.value)){

                    if(data[i].grade == parseFloat(grade)){

                        checkType();
        
                    }
                    else{
                        if(grade == 'ყველა კლასი'){
        
                            checkType()
        
                        }
                    }
        
                    function checkType(){
                        if(data[i].type == type){
                            newDiv[i].style.display = '';
                        }
                        else{
                            if(type == 'ყველა'){
                                newDiv[i].style.display = '';
                            }
                        }
                    }

                }
            }
        })

        for(let i = 0; i < data.length; i++){
            newDiv[i].onclick = () => {
                focusDiv.innerHTML = `
                    <!--<i class="fa-solid fa-bookmark" class='${i}' id='bookmarker'></i>-->
                    <div class="newDiv2">
                        <h3>${data[i].title}</h3>
                        <p>${data[i].main}</p>
                        <p>${data[i].more_info}</p>
                    </div>
                `;
                focusDiv.style.transform = 'translateX(0)'

                // var bookmarker = document.querySelector('#bookmarker');

                // bookmarker.addEventListener('click', () => {
                //     bookmarker.style.color = 'var(--mainColor)'
                // })
            }
        }

        focusDiv.onclick = () => {
            focusDiv.style.transform = 'translateX(-100vw)';
        }
        
}