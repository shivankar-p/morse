const crypt = new Map([ ['a', '._'], ['b', '_...'], ['c', '_._.'], ['d', '_..'], ['e', '.'], ['f', '.._.'], ['g', '__.'], ['h', '....'], ['i', '..'], ['j', '.___'], ['k', '_._'], ['l', '._..'], ['m', '__'], ['n', '_.'], ['o', '___'], ['p', '.__.'], ['q', '__._'], ['r', '._.'], ['s', '...'], ['t', '_'], ['u', '.._'], ['v', '..._'], ['w', '.__'], ['x', '_.._'], ['y', '_.__'], ['z', '__..'] ]);

const decrypt = new Map(Array.from(crypt, a => a.reverse()));

function translate(word)
{
    word = word.toLowerCase();
    let out = "";
    for(let i = 0; i < word.length; i++)
    {
        out += crypt.get(word[i]);
        out += " "
    }

    return out;
}

function dec(word)
{
    let out = "";
    let arr = word.split(" ");
    for(let i = 0; i < arr.length; i++)
    {
        out += decrypt.get(arr[i]);
    }

    return out;

}

function to_morse()
{
    word = document.getElementById("inp").value;
    document.getElementById("out_mor").value = translate(word); 
    //document.getElementById("out_mor").value = "brr";
}

function to_eng()
{
    word = document.getElementById("inp_code").value;
    document.getElementById("out_eng").value = dec(word);
}