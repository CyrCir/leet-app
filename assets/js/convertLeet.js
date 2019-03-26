/* Fonction permettant de transformer
la string en entrée par son
équivalent « L33t 5p34k » */

let leetLetters =
{
    a: 4,
    A: 4,
    b: 8,
    B: 8,
    e: 3,
    E: 3,
    l: 1,
    L: 1,
    o: 0,
    O: 0,
    s: 5,
    S: 5
}

function convertLeet(string)
{
    for ( let i = 0; i < string.length; i++ )
    {
        if ( leetLetters[string[i]] )
        {
            string = string.replace(string[i], leetLetters[string[i]]);
        }
    }
    
    return string;
};
