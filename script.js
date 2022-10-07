function  hndlr(res)
  {
    try{

        document.getElementById('content').innerHTML += '<div style="color: grey;">About $ {res.searchInformation.formattedTotalResults} results (${res.searchInformation.formattedSearchTime} second)';
        
        for(var i = 0; i < res.items.lenght; i++)
        {
            document.getElementById('content').innerHTML += '<br><a style="color: grey; font-size: 12px; text-decoration: none; "href=${res.items[i].link} target="_blank">${res.items[i].link}</a><a target="_blank" href=${res.items[i].link} style="text-decoration: none;"><h2 style="margin-top: 2px">${res.items[i].title}</h2></a><div style="margin-top: -8px;">${res.items[i].htmlSnippets}</div>';
        }

    }
    catch(error)
    {

    }
  }