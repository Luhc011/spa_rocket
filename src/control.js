export default function Controls() {

    const changeBody = document.querySelector('body')
    
    function home() {
        changeBody.classList.add('home');
        changeBody.classList.remove('universe');
        changeBody.classList.remove('explore');
    }
    
    function universe() {
        changeBody.classList.add('universe');
        changeBody.classList.remove('home');
        changeBody.classList.remove('explore');
    }
    
    function explorer() {
        changeBody.classList.add('explore');
        changeBody.classList.remove('universe');
        changeBody.classList.remove('home');
    }

    return {
        home,
        universe,
        explorer
    }
}
