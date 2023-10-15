let btn = document.querySelector(".btn")
let guess = document.querySelector("input")
let msg = document.querySelector(".msg")
let play = false
let random_word
let swap_word
let scrambled_word
let Guess_words = ['Python' , 'Java' , 'JavaScript' , 'Ruby' , 'Swift' , 'PHP' , 'Rust' , 'Kotlin' , 'TypeScript' , 'Perl' , 'MATLAB' , 'SQL' , 'Haskell' , 'COBOL' , 'Fortran' , 'Lisp' , 'Prolog' , 'HTML' , 'Assembly Language' , 'CSS' , 'Bash' , 'Nikita' , 'Janvi' , 'payal']

let ranword = ()=>{
    let i = Math.floor(Math.random()*Guess_words.length)
    console.log(Guess_words[i])
    return Guess_words[i]
}

let scramble_words = (arr)=>{

    for(let i=arr.length-1 ; i>=0 ; i--)
    {
        let temp = arr[i]
        let j = Math.floor(Math.random()*(i+1))
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

btn.addEventListener('click', function(){
    if(!play)
    {
        play = true
        btn.innerHTML = "GUESS"
        guess.classList.toggle('hidden')
        // guess.value = " "
        random_word = ranword()
        console.log(random_word.split(""))
        swap_word = scramble_words(random_word.split(""))
        scrambled_word = swap_word.join("")
        msg.innerHTML = scrambled_word
        
    }
    else
    {
        if(random_word == guess.value)
        {
            msg.innerHTML = "😎👍"
            play = false
            btn.innerHTML = "Start Again"
            guess.value= " "
            guess.classList.toggle('hidden')
        }
        else
        {
            msg.innerHTML = "😡🤬"
            setTimeout(function() {
                msg.innerHTML = scrambled_word;
              }, 2000);
        }
    }
})