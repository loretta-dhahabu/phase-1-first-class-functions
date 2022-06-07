function receivesAFunction ( callback )
{
     
    return callback();
}
callback = function ()
{
    
}

function returnsANamedFunction ()
{
    return namedFuction;
    
}
function namedFuction ()
{
    console.log("");
}
function returnsAnAnonymousFunction ()
{
    return function ()
    {
        
    }
}
