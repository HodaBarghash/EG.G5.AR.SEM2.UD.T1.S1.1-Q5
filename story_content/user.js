function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mS9ndCMwiK":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwtVNeV__AbFf6MD-5Fmr8iY1IHKCd9tOl8gUMN0zJ5ze2NTgUezaZT6iXwVX0HCFbY/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

