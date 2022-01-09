import React from "react"


export default function Meme(){
	const[meme, setmeme] = React.useState({
		Toptext:"yess",
		Bottomtext:"",
		image:"http://i.imgflip.com/1bij.jpg"
	})

	const[memedata, setmemedata] = React.useState([])


	React.useEffect(()=>{
		fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setmemedata(data.data.memes))
	}, [])






	function getRandomImage(){
		const n = memedata.length
		let randomnum = Math.floor(Math.random()*n)

		setmeme(function(oldmeme){
			return({
				...oldmeme,
				image : memedata[randomnum].url
			})
		})
	}




	function handleChange(event){
		setmeme(function(oldmeme){
			return({
				...oldmeme,
				[event.target.name] : event.target.value
			})
		})

	}





	return(
		<main>
		<div className="form">
		<input onChange={handleChange} type="text" name="Toptext" placeholder="Top Text" value={meme.Toptext}/>
		<input onChange={handleChange} type="text" name="Bottomtext" placeholder="Bottom Text" value={meme.Bottomtext}/>
		<button onClick={getRandomImage}>Get a new meme image 🖼</button>
		</div>

		<div className="meme">
		<img className="meme-image" src={meme.image} />
		<h2 className="meme--text top">{meme.Toptext}</h2>
		<h2 className="meme--text bottom">{meme.Bottomtext}</h2>
		</div>
		</main>
		)

	
}